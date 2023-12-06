from django.urls import path
from .api_views import *
from django.contrib.auth import logout

urlpatterns = [
    path('register/', register, name='register'),
    path('logout/', logout, name='logout'), 
    # when we send a request to this url, we will be logged out
]
