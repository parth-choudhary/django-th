from django_th.api.serializers import TriggersSerializer, UserServiceSerializer, ServicesActivatedSerializer
from django_th.api.permissions import DjangoModelPermissions
from django_th.models import TriggerService, UserService, ServicesActivated

from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination


class TriggersResultsSetPagination(PageNumberPagination):
    page_size = 20
    max_page_size = 50


class UserMixin(viewsets.GenericViewSet):

    def get_queryset(self):
        """
        get the data of the current user
        :return:
        """
        qs = super(UserMixin, self).get_queryset()
        return qs.filter(user=self.request.user)

    def create(self, request, *args, **kwargs):
        """
        :param request:
        :param args:
        :param kwargs:
        :return:
        """
        request.data['user'] = request.user.id
        return super(UserMixin, self).create(request, *args, **kwargs)


class TriggersViewSet(UserMixin, viewsets.ModelViewSet):
    """
    This viewset provides `list`, `create`, `retrieve`, `update`
    and `destroy` actions.
    """
    queryset = TriggerService.objects.all()
    serializer_class = TriggersSerializer
    pagination_class = TriggersResultsSetPagination
    permission_classes = (DjangoModelPermissions, )


class UserServiceViewSet(viewsets.ModelViewSet):
    queryset = UserService.objects.all()
    serializer_class = UserServiceSerializer


class ServiceActivatedViewSet(viewsets.ModelViewSet):
    queryset = ServicesActivated.objects.all()
    serializer_class = ServicesActivatedSerializer
