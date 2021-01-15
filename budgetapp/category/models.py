from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True)
    parent = models.CharField(max_length=100, null=True)
