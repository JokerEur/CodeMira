from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .database import *


@csrf_exempt
def index(request):
    return JsonResponse({'headers':"1"})