from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Post
from .serializers import PostSerializer
class PostViewSet(ReadOnlyModelViewSet):
    serializer_class=PostSerializer; lookup_field="slug"
    def get_queryset(self): return Post.objects.filter(published=True)
