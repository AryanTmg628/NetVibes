from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from authentication.serializers import UserDetailSerialiser

from .models import Order


class OrderCreateSerializer(ModelSerializer):

    class Meta:
        model = Order
        exclude = ["created_time"]


class OrderListSerializer(ModelSerializer):
    user_id = UserDetailSerialiser()

    class Meta:
        model = Order
        fields = "__all__"
