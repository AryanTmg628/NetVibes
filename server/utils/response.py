from typing import Any

from rest_framework.exceptions import ReturnDict
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST


class CustomResponse:
    """
    Custom response to main the intergiry
    """

    @staticmethod
    def success(
        data: Any = "", message="Successful", status_code=HTTP_200_OK
    ) -> Response:
        return Response(
            {"success": True, "data": data, "message": message}, status=status_code
        )

    @staticmethod
    def error(
        data: Any = "", message="Unsuccessful", status_code=HTTP_400_BAD_REQUEST
    ) -> Response:
        return Response(
            {"success": False, "data": data, "message": message}, status=status_code
        )
