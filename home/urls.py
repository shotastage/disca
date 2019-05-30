from django.urls import path
from rest_framework import routers
from rest_framework import generics
from .views import HomeView, TeamViewSet, TeamDetailViewSet

urlpatterns = [
    path('', HomeView.as_view(), name='starts'),
]

router = routers.DefaultRouter()
router.register(r'team', TeamViewSet, basename="team")
router.register(r'team/(?P<uid>[-\w]+)', TeamDetailViewSet, basename="team-detail")

urlpatterns += router.urls

