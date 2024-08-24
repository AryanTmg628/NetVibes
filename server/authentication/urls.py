from rest_framework import routers

from authentication.views import UserViewSet

router = routers.DefaultRouter()

router.register(r"auth", UserViewSet)


urlpatterns = router.urls
