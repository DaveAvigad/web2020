from django.shortcuts import render
from .models import Project


# Create your views here.
def homepage(request):
    projects = Project.objects.all()  # if logic is required -> use a controller
    return render(request, 'index.html', {'projects': projects})
