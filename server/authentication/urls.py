from django.urls import path
from rest_framework import routers

from authentication.views import LoginViewSet, UserViewSet, VerificationViewSet

router = routers.DefaultRouter()

router.register(r"auth", UserViewSet)


urlpatterns = [
    path("auth-verify/", VerificationViewSet.as_view()),
    path("auth/login/", LoginViewSet.as_view()),
]
urlpatterns += router.urls
