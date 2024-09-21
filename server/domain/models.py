from django.db import models

# Create your models here.


class TLD(models.Model):
    """
    TLD model to store tld name and its pricing
    """

    name = models.CharField(max_length=10)
    price_pm = models.IntegerField()
    price_pa = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f"{self.name}"

    def save(
        self,
        *args,
        force_insert=False,
        force_update=False,
        using=None,
        update_fields=None,
    ):

        # calculating the annual price

        if self.price_pm:
            self.price_pa = self.price_pm * 12

        return super().save(
            *args,
            force_insert=force_insert,
            force_update=force_update,
            using=using,
            update_fields=update_fields,
        )
