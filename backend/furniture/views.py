from django.shortcuts import render
from backend.usecases import *
from rest_framework.response import Response
from rest_framework.status import *

class TestView(NoAuthApiView):

    def get(self, request):
        context = {"message": "Hello World!"}
        return Response(context, 
                        status=HTTP_200_OK)

