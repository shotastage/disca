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

  def __str__(self):
    return self.name


class Application(models.Model):

  APPLICATION_CAYEGORY = [
    ('EDU', 'Education')
  ]

  app = models.CharField(max_length = 255)
  app_type = models.CharField(max_length = 5, choices=APPLICATION_CAYEGORY, null=True)
  url = models.CharField(max_length = 255, null=True)
  belonging_to = models.ForeignKey(Team, on_delete=models.CASCADE)

  def __str__(self):
    return self.app

