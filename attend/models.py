from django.db import models

# Create your models here.


class Attendances(models.Model):
  student_id = models.CharField(max_length = 100)
  name = models.CharField(max_length = 100)
  belongs = models.CharField(max_length = 80)
  grade = models.CharField(max_length = 50)
  bw_id = models.CharField(max_length = 50)
  ip_address = models.CharField(max_length = 30)
  attend = models.BooleanField(default=True)
  description = models.CharField(max_length = 500)
  status = models.CharField(max_length = 255)
