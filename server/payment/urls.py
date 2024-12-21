from django.urls import path
from rest_framework import routers

from payment.views import PaymentApiView

urlpatterns = [path("payment/", PaymentApiView.as_view())]
