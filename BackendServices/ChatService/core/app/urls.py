from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('create/', views.create),
]

# django-admin startproject <project_name>
# django-admin startproject <app_name>

# python3 manage.py makemigrations
# python3 manage.py migrate

# python3 manage.py createsuperuser

# python3 manage.py runserver 



