from django.contrib import admin
from .models import Team, Application

# Register your models here.
@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
  list_display = ('name',)


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
  list_display = ('app',)
