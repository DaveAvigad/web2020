from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=70)
    description = models.CharField(max_length=200)
    avatar = models.ImageField(upload_to='projects/images')
    website = models.URLField(blank=True)
# Create your models here.s
