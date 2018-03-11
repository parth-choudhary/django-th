from django.conf.urls import url, include

from django_th.api.views import TriggersViewSet, UserServiceViewSet, ServiceActivatedViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'triggers-list', TriggersViewSet)
router.register(r'userservices-list', UserServiceViewSet)
router.register(r'services-list', ServiceActivatedViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
