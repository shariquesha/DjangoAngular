from register.serializers import UserSerializer,UserDetailSerializer

from django.contrib.auth.models import User
from .models import User_Details


from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import TokenAuthentication,SessionAuthentication
from rest_framework import filters
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailViewSet(viewsets.ModelViewSet):
    queryset = User_Details.objects.all()
    serializer_class = UserDetailSerializer
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        if self.request.method == 'PUT':
            resource = User_Details.objects.filter(id=self.kwargs.get('pk')).first()
            if resource:
                return resource
            else:
                return User_Details(id=self.kwargs.get('pk'))
        else:
            return super(UserDetailViewSet, self).get_object()



class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = User.objects.get(id=token.user_id)
        serializer = UserSerializer(user, many=False)
        return Response({'token': token.key, 'user': serializer.data})
