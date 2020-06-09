from django.shortcuts import render, get_object_or_404
from .models import Blog


# Create your views here.
def blogs_list(request):
    articles = Blog.objects.order_by('-date')[:10]
    return render(request, 'index.html', {'articles': articles})


def get_article(request, article_id):
    blog = get_object_or_404(Blog, pk=article_id)
    return render(request, 'article.html', {'blog': blog})
