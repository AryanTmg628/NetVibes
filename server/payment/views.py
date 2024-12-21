import json

import requests
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from drf_yasg.utils import serializers, swagger_auto_schema
from rest_framework.permissions import AllowAny
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet, ViewSet

from utils.response import CustomResponse as cr

# Create your views here.


# Replace this with your Khalti Secret Key
KHALTI_SECRET_KEY = "05bf95cc57244045b8df5fad06748dab"


# @csrf_exempt
class PaymentApiView(APIView):
    permission_classes = [AllowAny]

    @swagger_auto_schema(operation_summary="Payment with khalti")
    def post(self, request: Request) -> Response:

        try:

            payload = json.dumps(request.data)
            response = requests.post(
                "https://a.khalti.com/api/v2/epayment/initiate/",
                headers={
                    "Authorization": f"Key {KHALTI_SECRET_KEY}",
                    "Content-Type": "application/json",
                },
                data=payload,
            )
            return cr.success(data=response.json(), status_code=response.status_code)
        except requests.exceptions.RequestException as e:
            return cr.error(message="error An error occurred", status_code=500)
