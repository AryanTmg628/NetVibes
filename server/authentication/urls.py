from django.urls import path
from rest_framework import routers

from authentication.views import UserViewSet, VerificationViewSet

router = routers.DefaultRouter()

router.register(r"auth", UserViewSet)


urlpatterns = [path("auth-verify/", VerificationViewSet.as_view())]
urlpatterns += router.urls
