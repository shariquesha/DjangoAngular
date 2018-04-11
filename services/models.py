from django.db import models

# Model for services 

class Service(models.Model):
    Service_Name = models.CharField(max_length=50)
    Service_Subcategory = models.CharField(max_length=100)
    Service_Description = models.CharField(max_length=1000)
    Service_Image = models.ImageField(upload_to='images',null=True)


    def __str__(self):
        return self.Service_Name
