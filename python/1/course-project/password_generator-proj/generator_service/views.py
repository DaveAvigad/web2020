from django.shortcuts import render
from django.http import HttpResponse
from generator_service.controllers import generatepass


# Create your views here.
def homepage(request):
    return render(request, 'index.html')
#     return render(request, 'index.html', {'password': 'test 123'})

def test(request):
    return HttpResponse('hi hi hi hi hi')

def generateShowPw(request):
    length = int(request.GET.get('length', 6))
    capital = request.GET.get('capital', 0)
    special = request.GET.get('special', 0)

    genPassw = generatepass.getPass(length, capital, special)  # 'ddddd'

    return render(request, 'password.html', {'password': genPassw})

def products(request):
    return render(request, 'products.html')
