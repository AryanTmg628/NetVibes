from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class User(AbstractUser):
    """
    User model extenind default User model with extra attributes
    """

    email = models.EmailField(unique=True)
    phone_number = models.CharField(
        max_length=15
    )  # since we are storing the country code as well
    street_address = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=40)

    REQUIRED_FIELDS = [
        "first_name",
        "last_name",
        "email",
        "phone_number",
        "street_address",
        "city",
        "country",
        "state",
    ]

    def __str__(self):
        return f"{self.email}"
