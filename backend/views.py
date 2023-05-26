from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from database import *


@csrf_exempt
def index(request):
    return JsonResponse({'headers': "1"})


def get_item(request):
    q = request.GET['id']
    query = Products.raw("SELECT products.name, products.price, productcategory.name, products.description, user.last_name, products.origin, products.produced_at, products.expiration_date, products.rating, products.license, products.certificate, products.picture FROM products " +
    "LEFT JOIN productcategory on products.category_id = productcategory.id " +
    "left join seller on products.seller_id = seller.id " +
    "left join user on seller.user_id = user.id WHERE products.id = ?", id)
    return JsonResponse(query, safe=False)
#
# def get_item_comment(request):
#     q = request.GET['id']
#     res = []
#     for i in (??):
#         # ans = функция Кирилла (q)
#         res.append(ans)
#     return res

def auth(request):
    a = request.GET
    if a == User.email:
        return JsonResponse({'statuss' : 'user', 'responce' :  True}, safe=False)
    else:
        return JsonResponse({'statuss': '', 'responce': False}, safe=False)

def catalog_all(request):
    res = []
    query = ProductCategory.select()
    for q in query:
        res.append({'name' : q.name})
    print(res)

    return JsonResponse(res, safe=False)


def catalog_names(request):
    ans = Products.select().join(ProductCategory)
    print(ans)
    return JsonResponse(ans, safe=False)


def catalog(request):
    q = request.GET['id']
    ans = Products.select().join(ProductCategory).where(ProductCategory.id == q)
    return JsonResponse(ans, safe=False)
