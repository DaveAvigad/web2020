from django.urls import path
from . import views

urlpatterns = [
    path('', views.blogs_list),
    path('<int:article_id>/', views.get_article)
]
