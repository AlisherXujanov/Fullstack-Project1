from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated


class NoAuthApiView(APIView):
    """Doesn't require authentication"""
    permission_classes = [AllowAny]


class AuthApiView(NoAuthApiView):
    """Requires authentication"""
    permission_classes = [IsAuthenticated]
