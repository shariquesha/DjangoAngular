from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from .models import Service


# class ServiceCreateView(CreateView):
#     model = Service
#     template_name = 'service_list.html'
#     fields = ['Service_Name','Service_Subcategory','Service_Description','Service_Image']


class ServiceListView(ListView):
    model = Service
    fields = ['Service_Name','Service_Image']


class ServiceDetailView(DetailView):
    model = Service
    context_object_name = 'Service'
    fields = ['Service_Name','Service_Subcategory','Service_Description','Service_Image']
