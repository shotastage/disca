from django.db import models
from django.utils import timezone

# Create your models here.




class Session(models.Model):
    name = models.CharField(max_length = 255)
    active = models.BooleanField(default=True)
    belonging_team = models.CharField(max_length = 255)
    owner = models.CharField(max_length = 255)
    created_at = models.DateField(default=timezone.now)


class Comment(models.Model):
    comment = models.TextField()
    session_id = models.CharField(max_length = 255)
    user = models.CharField(max_length = 255, default="Anonymous")
    like = models.IntegerField(default=0)
    time = models.DateField(default=timezone.now)
    archived = models.BooleanField(default=False)
