from typing import Any

import jwt
from django.conf import settings
from rest_framework.exceptions import AuthenticationFailed, ParseError

from .models import Order


class OrderServices:

    @staticmethod
    def get_user_id_from_token(authorization: str) -> int | None:

        try:
            token = authorization.split()[1]
            payload = jwt.decode(token, settings.SECRET_KEY, "HS256")
            print("The pa", payload)
            if "id" not in payload:
                return None
            return int(payload["id"])
        except jwt.exceptions.InvalidSignatureError:
            raise AuthenticationFailed("Invalid token.")
        except Exception as e:
            print(e)
            raise ParseError("Cannot parse the token.")
