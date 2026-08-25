from django.db import models
class Post(models.Model):
    title=models.CharField(max_length=200); slug=models.SlugField(unique=True); excerpt=models.TextField(); content=models.TextField(); cover_image=models.URLField(blank=True); published=models.BooleanField(default=False); published_at=models.DateTimeField(null=True,blank=True); created_at=models.DateTimeField(auto_now_add=True)
    class Meta: ordering=["-published_at","-created_at"]
    def __str__(self): return self.title
