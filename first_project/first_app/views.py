from django.shortcuts import render
from django.http import HttpResponse
from .models import Topic,Webpage,AccessRecord
# Create your views here.

# def index(request):
#     return HttpResponse("Hello World!")

# Our original index view function
# corresponds to indexOLD.html (rename it to index.html to use it!)

# def index(request):
#     my_dict = {'insert_me':"Hello I am from views.py!"}
#     return render(request,'first_app/index.html',context=my_dict)