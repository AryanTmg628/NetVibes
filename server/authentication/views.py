from django.contrib.auth import get_user_model
from rest_framework.exceptions import ValidationError
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from authentication.serializers import UserCreateSerializer
from authentication.services import AuthenticationService as authService
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
        try:
            serializer.is_valid(raise_exception=True)
            # getting the hashed password
            hashed_pass = authService.hashPassword(
                password=serializer.validated_data["password"],
                email=serializer.validated_data["email"],
            )

            serializer.validated_data["password"] = hashed_pass
            serializer.save()
            return cr.success(
                message="Your account has been successfully created.",
                status_code=HTTP_201_CREATED,
            )

        except ValidationError:
            return cr.error(
                data=serializer.errors, message="Error while registering user."
            )


class LoginView(APIView):
    pass
