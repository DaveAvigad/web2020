from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Todo(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)  # stores 1:n relationship user:todo
    dateCreated = models.DateField(auto_now_add=True)
    dateCompleted = models.DateField(null=True, blank=True)
    title = models.CharField(max_length=70)
    description = models.TextField(default=False)
    isImportant = models.BooleanField(default=False)

    def __str__(self):
        return self.title;
