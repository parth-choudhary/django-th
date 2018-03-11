from django_th.models import TriggerService, UserService, ServicesActivated
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


class TriggersSerializer(serializers.ModelSerializer):
    # provider = UserServiceSerializer(many=True, read_only=True)
    # consumer = UserServiceSerializer(many=True, read_only=True)
    # consumer = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # provider = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = TriggerService
        fields = '__all__'


class UserServiceSerializer(serializers.ModelSerializer):
    # name = TriggersSerializer(many=True, read_only=True)

    class Meta:
        model = UserService
        fields = '__all__'


class ServicesActivatedSerializer(serializers.ModelSerializer):

    class Meta:
        model = ServicesActivated
        fields = '__all__'
