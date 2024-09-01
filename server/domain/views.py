from django.http.response import json
from drf_yasg.utils import swagger_auto_schema
from rest_framework.permissions import AllowAny
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.status import HTTP_503_SERVICE_UNAVAILABLE
from rest_framework.views import APIView

from domain.services import DomainServices
from utils.response import CustomResponse as cr

# Create your views here.


class DomainViewSet(APIView):
    permission_classes = [AllowAny]

    ds = DomainServices()

    @swagger_auto_schema(
        operation_summary="Serach domain name, provide domain name to be searched as a query param 'name'"
    )
    def get(self, request: Request) -> Response:
        """
        Get method, it searches for requested domain name informations and returns the concerned information

        If domain checker api is unavailable it will response status code : HTTP_503_SERVICE_UNAVAILABLE

        Response Code 200 success with domain information
        """
        domain_name = request.query_params.get("name")
        if domain_name is None:
            return cr.error(message="Send domain name as a query")
        result = self.ds.searchDomain(domain_name)
        if result is None:
            return cr.error(
                message="Error while fetching domain result",
                status_code=HTTP_503_SERVICE_UNAVAILABLE,
            )
        json_result = json.loads(json.dumps(result))
        return cr.success(message="Domain Search Successful", data=json_result)
