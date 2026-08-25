from django.db import models
class Project(models.Model):
    title=models.CharField(max_length=160); slug=models.SlugField(unique=True); summary=models.TextField(); description=models.TextField(blank=True); image=models.URLField(blank=True); repository_url=models.URLField(blank=True); live_url=models.URLField(blank=True); technologies=models.JSONField(default=list); featured=models.BooleanField(default=False); created_at=models.DateTimeField(auto_now_add=True)
    class Meta: ordering=["-featured","-created_at"]
    def __str__(self): return self.title
