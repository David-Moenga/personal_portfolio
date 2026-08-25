from django.db import models
class Education(models.Model):
    institution=models.CharField(max_length=180); qualification=models.CharField(max_length=180); field_of_study=models.CharField(max_length=180,blank=True); start_date=models.DateField(); end_date=models.DateField(null=True,blank=True); description=models.TextField(blank=True)
    class Meta: ordering=["-start_date"]
    def __str__(self): return f"{self.qualification} — {self.institution}"
