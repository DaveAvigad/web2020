from django.db import models


# Create your models here.
class Blog(models.Model):
    date = models.DateField()
    title = models.CharField(max_length=70)
    description = models.CharField(max_length=200)
    long_text = models.TextField()
