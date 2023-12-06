from django.db import models

class Furniture(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    price = models.IntegerField()
    color = models.CharField(max_length=100)
    image = models.ImageField(upload_to='media/furniture/', 
                              default='media/furniture/default.jpg')
    category = models.CharField(max_length=100)
    quantity = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)