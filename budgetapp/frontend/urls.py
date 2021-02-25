from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('account', views.index),
    path('transaction', views.index)
]
