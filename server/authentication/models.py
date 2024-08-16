from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.


class User(AbstractUser):
    """
    User model extenind default User model with extra attributes
    """

    phone_number = models.CharField(
        max_length="15"
    )  # since we are storing the country code as well
    street_address = models.CharField(max_length="50")
    city = models.CharField(max_length="50")
    country = models.CharField(max_length="50")
    state = models.CharField(max_length="40")
    password = models.CharField(max_length="50")

    USERNAME_FIELD = "email"

    def __str__(self):
        return self.email
