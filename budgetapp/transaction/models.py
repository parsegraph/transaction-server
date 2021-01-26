from django.db import models
from accounts.models import Account


class Transaction(models.Model):
    account_num = models.ForeignKey(
        'accounts.Account', on_delete=models.CASCADE, null=False)
    date = models.DateTimeField(null=False, auto_now_add=True)
    category = models.ForeignKey(
        'category.Category', on_delete=models.SET_NULL, null=True, default=None)
    description = models.CharField(max_length=250, null=False)
    transaction_type = models.CharField(max_length=100, null=False)
    amount = models.DecimalField(max_digits=12, decimal_places=2, null=False)
    clear_date = models.DateTimeField(null=True)
