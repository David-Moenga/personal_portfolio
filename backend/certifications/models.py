from django.db import models
class Certification(models.Model):
    name=models.CharField(max_length=180); issuer=models.CharField(max_length=180); issued_date=models.DateField(); credential_url=models.URLField(blank=True); image=models.URLField(blank=True)
    class Meta: ordering=["-issued_date"]
    def __str__(self): return self.name
