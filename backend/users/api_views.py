from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.


@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')
    password2 = request.data.get('password2')
    if password != password2:
        return Response({'error': 'Passwords do not match'}, status=400)
    if not username or not password:
        return Response({'error': 'Please provide both username and password'}, status=400)
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already taken'}, status=400)
    user = User.objects.create_user(username=username, password=password)
    Token.objects.create(user=user)
    return Response({'token': user.auth_token.key}, status=201)


@api_view(['POST'])
def logout(request):
    try:
        refresh_token = request.data["refresh_token"]
        token = RefreshToken(refresh_token)
        token.blacklist()
        request.user.auth_token.delete()
        return Response(status=status.HTTP_205_RESET_CONTENT)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)
