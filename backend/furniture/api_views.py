from .usecases import *
from .models import *
from rest_framework.response import Response
from rest_framework.status import *
from .serializers import *



class FurnitureList(NoAuthApiView):
    """List all furniture"""

    def get(self, request):
        furniture = Furniture.objects.all()
        serializer = FurnitureSerializerForWishlist(furniture, many=True)
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


class WishlistApiView(NoAuthApiView):

    def get(self, request):
        furnitures = []
        if wishlist := get_wishlist(request):
            furnitures = wishlist.furnitures.all()
        serializer = FurnitureSerializerForWishlist(furnitures, many=True)
        return Response(serializer.data, status=HTTP_200_OK)


    def post(self, request):
        print("=============================================")
        print("=============================================")
        print("=============================================")
        print("request.data: ", request.data)
        print("=============================================")
        print("=============================================")
        print("=============================================")
        furniture_id = request.data.get('furniture_id')
        if delete := request.data.get('delete_furniture'):
            del_furniture_from_wishlist(request, furniture_id)
        else:
            set_wishlist(request, furniture_id)
        return Response(status=HTTP_200_OK)
