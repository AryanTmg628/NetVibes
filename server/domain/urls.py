from django.urls import path

from domain.views import DomainViewSet

urlpatterns = [path("domain/", DomainViewSet.as_view(), name="domain-search")]
