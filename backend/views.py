from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from database import *


@csrf_exempt
def index(request):
    return JsonResponse({'headers': "1"})


# def get_item(request):
#     q = request.GET['id']
#     # ans = функция Кирилла (q)
#     return JsonResponse(ans, safe=False)
#
# def get_item_comment(request):
#     q = request.GET['id']
#     res = []
#     for i in (??):
#         # ans = функция Кирилла (q)
#         res.append(ans)
#     return res


def catalog_all(request):
    print(User.select())
    user_count = User.select().count()
    print(user_count)
    return JsonResponse({}, safe=False)


def catalog_names(request):
    ans = Products.select().join(ProductCategory)
    print(ans)
    return JsonResponse(ans, safe=False)


def catalog(request):
    q = request.GET['id']
    ans = Products.select().join(ProductCategory).where(ProductCategory.id == q)
    return JsonResponse(ans, safe=False)
