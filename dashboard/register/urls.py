from . import views
from  django.urls import path,include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', views.UserViewSet,base_name="users_router")
router.register('details',views.UserDetailViewSet,base_name="userdetails_router")

urlpatterns = [
    path('',include(router.urls)),
    path('authenticate',views.CustomObtainAuthToken.as_view(),name = "authenticate_url"),
]
