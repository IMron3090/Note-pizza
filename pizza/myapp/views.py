from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request, "index.html")


def place_order(request):
    return HttpResponse("Заказ размещен успешно!")


def add_to_cart(request, product_id):
    return HttpResponse(f"Товар с id {product_id} добавлен в корзину!")


def show_cart(request):
    return HttpResponse("Корзина пуста!")
