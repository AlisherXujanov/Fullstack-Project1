from django.urls import path
from .api_views import *

urlpatterns = [
    path('', FurnitureList.as_view()),
]
