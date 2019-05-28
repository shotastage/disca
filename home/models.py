from django.db import models

# Create your models here.


class Team(models.Model):
  name = models.CharField(max_length = 255)
  identification = models.CharField(max_length = 255)
  private = models.BooleanField()
  is_deleted = models.BooleanField()
  owner = models.CharField(max_length = 255)
