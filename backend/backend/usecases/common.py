from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated

SECOND = 1
MINUTE = SECOND * 60
HOUR = MINUTE * 60

SHORT_WAIT = SECOND * 3
LONG_WAIT = MINUTE * 10

SHORT_CACHING_TIME = MINUTE * 30
LONG_CACHING_TIME = HOUR * 2


class NoAuthApiView(APIView):
    """Doesn't require authentication"""
    permission_classes = [AllowAny]


class AuthApiView(NoAuthApiView):
    """Requires authentication"""
    permission_classes = [IsAuthenticated]
