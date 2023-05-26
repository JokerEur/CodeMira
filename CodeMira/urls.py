from django.contrib import admin
from django.urls import path, re_path
from backend import views

urlpatterns = [
    path('', views.index),
    path('admin/', admin.site.urls),
    # path('get_item', views.get_item),
    # path('get_item_comment', views.get_item_comment),
    re_path('catalog_all', views.catalog_all),
    re_path('catalog_names', views.catalog_names),
    re_path('catalog', views.catalog),
]