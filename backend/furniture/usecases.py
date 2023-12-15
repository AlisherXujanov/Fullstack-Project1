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
    return wishlist_objs