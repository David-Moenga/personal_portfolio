from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Education
from .serializers import EducationSerializer
class EducationViewSet(ReadOnlyModelViewSet): queryset=Education.objects.all(); serializer_class=EducationSerializer
