from django.db import models

from authentication.models import User


# Create your models here.
class Order(models.Model):
    domain_name = models.CharField(max_length=50)
    amount = models.BigIntegerField()
    payment_status = models.CharField(max_length=10)
    created_time = models.DateTimeField(auto_now_add=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    primary_ns = models.CharField(max_length=100)
    secondary_ns = models.CharField(max_length=100)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone_number = models.CharField(
        max_length=15
    )  # since we are storing the country code as well
    street_address = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=40)

    def __str__(self):
        return f"{self.domain_name}-- {self.user_id.email}"
