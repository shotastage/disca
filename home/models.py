from django.db import models
from uuid import uuid4
# Create your models here.



def generateID():
  uuid = str(uuid4()).replace("-", "")
  return uuid

class Team(models.Model):
  name = models.CharField(max_length = 255)
  description = models.TextField(null=True)
  identification = models.CharField(max_length = 255, default=generateID)
  private = models.BooleanField(default=False)
  is_deleted = models.BooleanField(default=False)
  owner = models.CharField(max_length = 255)


class Application(models.Model):
  app = models.CharField(max_length = 255)
  app_type = models.CharField(max_length = 255)
  url = models.CharField(max_length = 255)
