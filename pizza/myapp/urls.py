from django.urls import path
from . import views

app_name = "blog"

urlpatterns = [
    path("", views.home, name="home"),
    path("place_order/", views.place_order, name="place_order"),
    path("add_to_cart/<int:product_id>/", views.add_to_cart, name="add_to_cart"),
]
