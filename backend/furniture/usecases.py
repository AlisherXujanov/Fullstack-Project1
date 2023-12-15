from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import WishList, Furniture

class NoAuthApiView(APIView):
    """Doesn't require authentication"""
    permission_classes = [AllowAny]


class AuthApiView(NoAuthApiView):
    """Requires authentication"""
    permission_classes = [IsAuthenticated]


def get_wishlist(request):
    wishlist_objs = WishList.objects.filter(owner=request.user)
    return wishlist_objs[0]


def set_wishlist(request, furniture_id:int):
    wishlist_objs = WishList.objects.filter(owner=request.user)
    if wishlist_objs:
        wishlist = wishlist_objs[0]
    else:
        wishlist = WishList.objects.create(owner=request.user)
    
    furniture = Furniture.objects.get(pk=furniture_id)
    wishlist.furnitures.add(furniture)


def del_furniture_from_wishlist(request, furniture_id:int):
    if wishlist := WishList.objects.filter(owner=request.user)[0]:
        furniture = Furniture.objects.get(pk=furniture_id)
        wishlist.furnitures.remove(furniture)