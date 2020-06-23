"""wfh_todo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from todo import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('admin/', admin.site.urls),
    path('register/', views.registerform, name='registerform'),
    path('logout/', views.logoutuser, name='logoutuser'),
    path('login/', views.loginuser, name='loginuser'),

    # CRUD

    path('mytodos/', views.mytodos, name='mytodos'),
    path('createnewtodo/', views.createnewtodo, name='createnewtodo'),
    path('todo/<int:todo_pk>', views.updatetodo, name='updatetodo'),
    path('todo/<int:todo_pk>/done', views.donetodo, name='donetodo'),
    path('todo/<int:todo_pk>/delete', views.deletetodo, name='deletetodo'),

    path('alltodos/', views.alltodos, name='alltodos'),
    path('assigntome/<int:todo_pk>', views.assigntome, name='assigntome'),

]
