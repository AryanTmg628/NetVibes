from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.cache import cache
from rest_framework.exceptions import ValidationError
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from authentication.serializers import UserCreateSerializer, VerifyRegisterSerializer
from authentication.services import AuthenticationService as authService
from email_service.services import EmailServices
from utils.response import CustomResponse as cr

User = get_user_model()


# Create your views here.


class UserViewSet(ModelViewSet):

    authentication_classes = []
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer

    # def get_serializer_class(self):
    #     if self.action == "create":
    #         return UserCreateSerializer
    #     return super().get_serializer_class()

    def create(self, request: Request) -> Response:
        serializer = self.serializer_class(data=request.data)
        es = EmailServices()
        try:
            serializer.is_valid(raise_exception=True)
            # getting the hashed password
            hashed_pass = authService.hashPassword(
                password=serializer.validated_data["password"],
                email=serializer.validated_data["email"],
            )

            serializer.validated_data["password"] = hashed_pass

            code = es.generate_verification_code(6)
            send_email = es.send_verification_code(
                first_name=serializer.validated_data["first_name"],
                to_address=serializer.validated_data["email"],
                verification_code=code,
                from_address=settings.EMAIL_HOST_USER,
            )

            serializer.validated_data["v_code"] = code

            if not send_email:
                return cr.error(message="Error while sending email.")

            # storing the details in the cache
            cache.set(
                f"user_{serializer.validated_data['email']}_{serializer.validated_data['username']}",
                serializer.validated_data,
                timeout=3600,
            )

            return cr.success(
                message="Verification code has been sent to your email.Please verify it",
                status_code=HTTP_201_CREATED,
            )

        except ValidationError:
            return cr.error(
                data=serializer.errors, message="Error while registering user."
            )


class VerificationViewSet(APIView):
    """
    Verify the authentication verification code for registering account
    """

    authentication_classes = []
    serializer_class = VerifyRegisterSerializer

    def post(self, request: Request) -> Response:
        serializer = self.serializer_class(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            user_verification_code = serializer.validated_data["v_code"]
            user_email = serializer.validated_data["email"]
            user_username = serializer.validated_data["username"]

            # getting the details from cache
            cached_user = cache.get(f"user_{user_email}_{user_username}")

            stored_verification_code = cached_user["v_code"]
            if int(stored_verification_code) != int(user_verification_code):
                return cr.error(message="Invalid verification code.")
            del cached_user["verification_code"]

            serial = UserCreateSerializer(data=cached_user)
            serial.is_valid(raise_exception=True)
            serial.save()

            return cr.success(
                message="Your account has been successfully created.",
            )

        except ValidationError:
            return cr.error(
                data=serializer.errors, message="Error while registering user."
            )


class LoginView(APIView):
    pass
