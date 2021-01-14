from django.db import models


class Account(models.Model):
    name = models.CharField(null=False, max_length=100)
