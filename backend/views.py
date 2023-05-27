import json

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from database import *
from rest_framework.decorators import api_view
from playhouse.shortcuts import model_to_dict


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


@csrf_exempt
def auth(request):
    tmp = {'Пользователь': '1', 'Фермер': '2', 'Администратор': '3', '': '0'}

    if not request.body:
        return JsonResponse({'isAuth': '', 'role': '', 'id': 0}, safe=False)

    try:
        data = json.loads(request.body.decode('utf-8'))
        login = data.get('email')
        password = data.get('password')
        a = User.select().where(User.email == login, User.password_hash == password).first()
        auth = False
        id = ''
        role = ''

        if a:
            auth = True
            id = a.id
            role = Role.get(Role.id == a.role_id).role_name

        return JsonResponse({'isAuth': auth, 'role': tmp[role], 'id': id}, safe=False)
    except json.decoder.JSONDecodeError:
        return JsonResponse({'isAuth': '', 'role': '', 'id': 0}, safe=False)


def catalog_all(request):
    res = []
    query = ProductCategory.select()
    for q in query:
        res.append({'name' : q.name})
    print(res)

    return JsonResponse(res, safe=False)


@csrf_exempt
def all_products(request):
    res = []
    query = Products.select()
    for q in query:
        res.append({'id' : q.id, 'name' : q.name, 'price': q.price, 'description' : q.description, 'picture':q.picture})
    return JsonResponse(res, safe=False, json_dumps_params={'indent': 2})


@csrf_exempt
def product(request):
    data = json.loads(request.body.decode('utf-8'))
    id = data.get('id')
    query = Products.raw(
        "SELECT products.name, products.price, productcategory.name, products.description, user.last_name, products.origin, products.produced_at, products.expiration_date, products.rating, products.license, products.certificate, products.picture FROM products " +
        "LEFT JOIN productcategory on products.category_id = productcategory.id " +
        "left join seller on products.seller_id = seller.id " +
        "left join user on seller.user_id = user.id WHERE products.id = ?",
        [id])

    results = query.fetchall()



    for q in results:
        print(q.name)

    return JsonResponse({}, safe=False, json_dumps_params={'indent': 2})

def catalog_names(request):
    ans = Products.select().join(ProductCategory)
    print(ans)
    return JsonResponse(ans, safe=False)

@csrf_exempt
def catalog(request):
    q = request.GET['id']
    ans = Products.select().join(ProductCategory).where(ProductCategory.id == q)
    return JsonResponse(ans, safe=False)
