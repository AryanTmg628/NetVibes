from django.urls import path
from rest_framework import routers

from order.views import OrderViewSet

router = routers.SimpleRouter()

router.register(r"order", OrderViewSet)


urlpatterns = router.urls
