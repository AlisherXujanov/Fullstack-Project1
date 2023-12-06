from django.urls import path
from .api_views import *

urlpatterns = [
    path('', FurnitureList.as_view()),
    path('details/<int:pk>', FurnitureDetails.as_view()),
]
