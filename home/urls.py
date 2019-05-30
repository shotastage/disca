from django.urls import path
from rest_framework import routers
from .views import HomeView, TeamViewSet, TeamDetailViewSet

urlpatterns = [
    path('', HomeView.as_view(), name='starts'),
]

router = routers.DefaultRouter()
router.register(r'team', TeamViewSet)
router.register(r'team/$', TeamDetailViewSet)

urlpatterns += router.urls
