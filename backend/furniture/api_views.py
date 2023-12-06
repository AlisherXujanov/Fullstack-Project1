from .usecases import *
from .models import *
from rest_framework.response import Response
from rest_framework.status import *
from .serializers import FurnitureSerializer


class FurnitureList(NoAuthApiView):
    """List all furniture"""

    def get(self, request):
        furniture = Furniture.objects.all()
        serializer = FurnitureSerializer(furniture, many=True)
        return Response(serializer.data, status=HTTP_200_OK)


    def post(self, request):
        serializer = FurnitureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    


class FurnitureDetails(NoAuthApiView):
    """Get furniture details"""

    def get(self, request, pk):
        furniture = Furniture.objects.get(pk=pk)
        serializer = FurnitureSerializer(furniture)
        return Response(serializer.data, status=HTTP_200_OK)


    def put(self, request, pk):
        furniture = Furniture.objects.get(pk=pk)
        serializer = FurnitureSerializer(furniture, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


    def delete(self, request, pk):
        furniture = Furniture.objects.get(pk=pk)
        furniture.delete()
        return Response(status=HTTP_204_NO_CONTENT)