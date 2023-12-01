from django.urls import path
from .api_views import *

urlpatterns = [
    path('register/', register, name='register'),
    path('logout/', logout, name='logout'),
]
