from rest_framework import serializers
from .models import Furniture



class FurnitureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Furniture
        fields = ["name", "description", "price", 
                "color", "image", "category", "quantity"]

        






