from django.contrib.auth.models import User
from . import models
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password' : {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserDetailSerializer(serializers.ModelSerializer):
    username = User()


    class Meta:
        model = models.User_Details

        fields = (
            'User_id',
            'id',
            'First_Name',
            'Last_Name',
            'Street_Name',
            'City_Name',
            'State_Name',
            'Country_Name',
            'PinCode',
            'Mobile_Number',
            )
        # fields = '__all__'
        extra_kwargs = {'User_id.password' : {'write_only': True, 'required': True}}
        depth = 1

    def create(self, validated_data):
        user_detail = models.User_Details.objects.create(**validated_data)
        return user_detail