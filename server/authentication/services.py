import bcrypt


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
