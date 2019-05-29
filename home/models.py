from django.db import models

# Create your models here.


class Team(models.Model):
  name = models.CharField(max_length = 255)
  description = models.TextField(null=True)
  identification = models.CharField(max_length = 255)
  private = models.BooleanField(default=False)
  is_deleted = models.BooleanField(default=False)
  owner = models.CharField(max_length = 255)
