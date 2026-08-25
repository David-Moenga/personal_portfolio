from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Skill
from .serializers import SkillSerializer
class SkillViewSet(ReadOnlyModelViewSet): queryset=Skill.objects.all(); serializer_class=SkillSerializer
