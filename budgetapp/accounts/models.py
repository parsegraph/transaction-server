from django.db import models
from django.contrib.auth.models import User


class Account(models.Model):
    name = models.CharField(null=False, max_length=100)
    owner = models.ForeignKey(
        User, related_name="accounts", on_delete=models.CASCADE, null=True)
