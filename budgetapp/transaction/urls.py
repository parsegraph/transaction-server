from rest_framework import routers
from .api import TransactionViewSet

router = routers.DefaultRouter()
router.register('transaction', TransactionViewSet, 'transaction')

urlpatterns = router.urls
