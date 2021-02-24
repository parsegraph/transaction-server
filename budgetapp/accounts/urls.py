from rest_framework import routers
from .api import AccountViewSet

router = routers.DefaultRouter()
router.register('account', AccountViewSet, 'account')

urlpatterns = router.urls
