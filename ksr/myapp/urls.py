from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('users', UserViewSet)
router.register('students', StudentViewSet)
router.register('rooms', RoomViewSet)
router.register('allocations', AllocationViewSet)
router.register('fees', FeeViewSet)
router.register('complaints', ComplaintViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/register/', register_user),
]
