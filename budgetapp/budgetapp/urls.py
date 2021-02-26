from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('admin', admin.site.urls),
    path('', include('accounts.urls')),
    path('', include('category.urls')),
    path('', include('transaction.urls')),
    path('', include('users.urls'))
]
