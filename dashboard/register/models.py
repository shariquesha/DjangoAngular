from django.db import models
from django.conf import settings

class User_Details(models.Model):
    User_id = models.ForeignKey(settings.AUTH_USER_MODEL,unique=True,
    related_name='user_detail', on_delete=models.CASCADE)
    First_Name = models.CharField(max_length=100)
    Last_Name = models.CharField(max_length=100)
    Street_Name = models.CharField(max_length=100)
    City_Name = models.CharField(max_length=100)
    State_Name = models.CharField(max_length=100)
    Country_Name = models.CharField(max_length=100)
    PinCode = models.IntegerField()
    Mobile_Number =  models.IntegerField()


    def __str__(self):
        return self.First_Name + self.Last_Name

