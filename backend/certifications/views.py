from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Certification
from .serializers import CertificationSerializer
class CertificationViewSet(ReadOnlyModelViewSet): queryset=Certification.objects.all(); serializer_class=CertificationSerializer
