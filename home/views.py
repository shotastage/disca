from django.shortcuts import render
from django.views.generic import View
from rest_framework.response import Response
from rest_framework import viewsets, filters, generics
from rest_framework.views import APIView

from .models import Team
from .serializer import TeamSerializer

# Create your views here.


class HomeView(View):
    def get(self, request):
        return render(request, "index.html")



class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer



class TeamDetailViewSet(viewsets.ModelViewSet):
    serializer_class = TeamSerializer
    lookup_field = 'team_id'

    def get_queryset(self):
        team_info = Team.objects.filter(identification=self.request.query_params.get('idf'))
        return team_info
