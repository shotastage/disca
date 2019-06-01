from django.contrib import admin
from .models import Session, Comment
# Register your models here.

@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
  list_display = ('name',)



@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
  list_display = ('comment',)
