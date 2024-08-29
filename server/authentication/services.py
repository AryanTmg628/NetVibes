from datetime import datetime

import bcrypt
from django.contrib.auth import get_user_model

from authentication.authentication import JWTAuthentication as jwtService

User = get_user_model()


class AuthenticationService:
    """
    Authentication services
    """

    @staticmethod
    def hashPassword(password: str, email: str) -> str:
        salt = bcrypt.gensalt()
        passw = password.encode("utf-8")
        hashed_password = bcrypt.hashpw(passw, salt)
        formatted_hash = (
            f"{email}|{salt.decode('utf-8')}|{hashed_password.decode('utf-8')}"
        )
        return formatted_hash

    @staticmethod
    def check_login_credentials(email: str, password: str) -> object | None:
        try:
            user = User.objects.get(email=email.lower())
            if not AuthenticationService.check_password(
                email=user.email, password=password, stored_password=user.password
            ):
                return None

            return user
        except User.DoesNotExist:
            return None

    @staticmethod
    def check_password(email: str, password: str, stored_password: str) -> bool:
        try:
            stored_salt = stored_password.split("|")[1]
            byte_salt = stored_salt.encode("UTF-8")

            hashed_pass = bcrypt.hashpw(password.encode("UTF-8"), byte_salt)
            formatted_hash = f"{email}|{stored_salt}|{hashed_pass.decode('UTF-8')}"

            if formatted_hash == stored_password:
                return True
            return False

        except Exception:
            return False

    @staticmethod
    def generateJWTToken(user: User) -> str | None:
        try:
            data = {
                "id": user.id,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                "username": user.username,
                "iat": datetime.now().timestamp(),
            }

            return jwtService.create_token(data)

        except Exception:
            return None
