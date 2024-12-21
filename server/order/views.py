from django.shortcuts import render
from drf_yasg.utils import serializers, swagger_auto_schema
from rest_framework.permissions import AllowAny
from rest_framework.validators import ValidationError
from rest_framework.views import APIView, Request, Response
from rest_framework.viewsets import ModelViewSet

from order.serilizers import OrderCreateSerializer, OrderListSerializer
from order.services import OrderServices as cs
from utils.response import CustomResponse as cr

from .models import Order


# Create your views here.
class OrderViewSet(ModelViewSet):
    authentication_classes = []
    permission_classes = [AllowAny]
    queryset = Order.objects.all()
    serializer_class = OrderCreateSerializer

    @swagger_auto_schema(operation_summary="Place an domain order")
    def create(self, request: Request) -> Response:
        serializer = self.serializer_class(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return cr.success(
                message="Successfully placed an order",
            )

        except ValidationError:
            return cr.error(
                data=serializer.errors, message="Error while placing an order."
            )

    @swagger_auto_schema(operation_summary="Lists all domain order")
    def list(self, request: Request) -> Response:

        try:
            user_id = cs.get_user_id_from_token(request.headers["Authorization"])

            if not user_id:
                return cr.error(message="Cannot find the user.")

            instance = Order.objects.filter(user_id=user_id)

            serializer = OrderListSerializer(instance, many=True)
            return cr.success(
                message="Successfully retrieved all  order", data=serializer.data
            )

        except ValidationError:
            return cr.error(
                data=serializer.errors, message="Error while listing an order."
            )
