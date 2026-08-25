from django.db import models
class Experience(models.Model):
    company=models.CharField(max_length=150); role=models.CharField(max_length=150); location=models.CharField(max_length=120,blank=True); start_date=models.DateField(); end_date=models.DateField(null=True,blank=True); description=models.TextField(); technologies=models.JSONField(default=list)
    class Meta: ordering=["-start_date"]
    def __str__(self): return f"{self.role} — {self.company}"
