from django.shortcuts import render
from django.views.generic import View
from rest_framework.response import Response
from rest_framework import viewsets, filters, generics
from .models import Team
from .serializer import TeamSerializer

# Create your views here.


class HomeView(View):
    def get(self, request):
        return render(request, "index.html")



class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class TeamDetailViewSet(generics.ListAPIView):

    lookup_field = "uid"

    serializer_class = TeamSerializer

    def get_queryset(self):
        team_info = Team.objects.filter(identification=self.lookup_field)
        return team_info
