from django.contrib import admin
from django.urls import path, re_path, include

from frontend import views

urlpatterns = [
    path('admin', admin.site.urls),
    re_path(r'^$', views.index),
    path('', include('accounts.urls')),
    path('', include('category.urls')),
    path('', include('transaction.urls')),
    path('', include('users.urls')),
    re_path(r'^(?!/?api/?)', include('frontend.urls'))
 ]
