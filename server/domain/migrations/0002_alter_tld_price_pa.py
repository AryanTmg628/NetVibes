# Generated by Django 5.1 on 2024-09-21 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("domain", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="tld",
            name="price_pa",
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
