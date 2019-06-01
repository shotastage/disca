from rest_framework import serializers
from .models import Team, Application


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('name', 'description', 'identification', 'private')


class TeamDetailSerializer(serializers.ModelSerializer):
    applications = serializers.SerializerMethodField()

    class Meta:
        model = Application
        fields = ('app',)

    def get_apps(self, obj):
        try:
            abstract = TeamSerializer(Team.objects.all().filter(belonging_to = Application.objects.get(id=obj.id)), many=True).data
            return abstract
        except:
            abstract = None
            return abstract
