from rest_framework import routers
from .api import TransactionViewSet

router = routers.DefaultRouter()
router.register('api/transaction', TransactionViewSet, 'transaction')

urlpatterns = router.urls
