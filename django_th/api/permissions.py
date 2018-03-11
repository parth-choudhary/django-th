from rest_framework import permissions


class DjangoModelPermissions(permissions.BasePermission):

    perms_map = {
        'GET': [],
        'OPTIONS': [],
        'HEAD': [],
        'POST': ['django_th.add_trigger'],
        'PUT': ['django_th.change_trigger'],
        'PATCH': ['django_th.change_trigger'],
        'DELETE': ['django_th.delete_trigger'],
    }
