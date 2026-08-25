from django.db import models
class Skill(models.Model):
    name=models.CharField(max_length=80); category=models.CharField(max_length=80,blank=True); proficiency=models.PositiveSmallIntegerField(default=80); order=models.PositiveSmallIntegerField(default=0)
    class Meta: ordering=["order","name"]
    def __str__(self): return self.name
