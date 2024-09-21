from django.urls import path
from rest_framework import routers

from domain.views import DomainViewSet, TLDViewSet

router = routers.SimpleRouter()

router.register(r"tlds", TLDViewSet)

urlpatterns = [path("domain/", DomainViewSet.as_view(), name="domain-search")]

urlpatterns += router.urls
