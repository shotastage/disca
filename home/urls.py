from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from rest_framework import generics
from .views import HomeView, TeamViewSet, TeamDetailViewSet
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('', HomeView.as_view(), name='starts'),
    path('team', TeamViewSet.as_view({'get': 'list'})),
    path('team/detail', TeamDetailViewSet.as_view({'get': 'list'})),
    path('team/detail/<str:team_id>', TeamDetailViewSet.as_view({'get': 'list'}), name='detail')
]
