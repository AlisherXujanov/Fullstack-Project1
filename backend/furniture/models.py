from django.db import models
from PIL import Image
import os

class Furniture(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    price = models.IntegerField()
    color = models.CharField(max_length=100)
    image = models.ImageField(upload_to='furniture/', 
                              default='furniture/default.jpg')
    category = models.CharField(max_length=100)
    quantity = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def save(self, *args, **kwargs):
        super(Furniture, self).save(*args, **kwargs)
        
        img = Image.open(self.image.path)
        if img.height > 600 or img.width > 600:
            output_size = (600, 600)
            img.thumbnail(output_size)
            img.save(self.image.path)

    def delete(self, *args, **kwargs):
        image_url = self.image.url
        if image_url != '/media/furniture/default.jpg':
            os.remove(self.image.path)
        super().delete(*args, **kwargs)
