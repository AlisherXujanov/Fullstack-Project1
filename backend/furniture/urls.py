from django.urls import path
from .api_views import *

urlpatterns = [
    path('', FurnitureList.as_view()),
    path('<int:pk>/', FurnitureDetails.as_view()),
    path('wishlist/', WishlistApiView.as_view()),
]
