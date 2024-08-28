from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

User = get_user_model()


class UserCreateSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"


class VerifyRegisterSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField(max_length=150)
