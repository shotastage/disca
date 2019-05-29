from django.shortcuts import render
from django.views.generic import View
from rest_framework import viewsets, filters
from .models import Team
from .serializer import TeamSerializer

# Create your views here.


class HomeView(View):

    def get(self, request):
        return render(request, "index.html")



class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
