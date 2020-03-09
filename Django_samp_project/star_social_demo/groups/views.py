from django.shortcuts import render
from django.contrib.auth.mixins import (LoginRequiredMixin,PermissionRequiredMixin)
from django.http import get_object_or_404

# Create your views here.
from django.urls import reverse
from django.views import generic

from groups.models import Group,GroupMember

# Exception raised when the relational integrity of the database is affected, 
# e.g. a foreign key check fails, duplicate key, etc.
from django.db import IntegrityError

from django.contrib import messages

class CreateGroup(LoginRequiredMixin,generic.CreateView):
    fields = ('name','description')
    model = Group

class SingleGroup(generic.DetailView):
    model = Group

class ListGroups(generic.ListView):
    model = Group    

class JoinGroup(LoginRequiredMixin,generic.RedirectView):

    def get_redirect_url(self,*args,**kwargs):
        return reverse('groups:single',kwargs={'slug':self.kwargs.get('slug')})

    def get(self,request,*args,**kwargs):
        group = get_object_or_404(Group,slug=self.kwargs.get('slug'))

        try:
            GroupMember.objects.create(user=self.request.user,group=group)
        except IntegrityError:
            messages.warning(self.request,('Warning already a member!'))
        else:
            messages.success(self.request,'Yout are now a member!')
    
        return super().get(request,*args,**kwargs)

        
class LeaveGroup(LoginRequiredMixin,generic.RedirectView):

    def get_redirect_url(self,*args,**kwargs):
        return reverse('groups:single',kwargs={'slug':self.kwargs.get('slug')})
    
    def get(self,request,*args,**kwargs):

        try: 
            membership = model.GroupMember.objects.filter(
                user = self.request.user,
                group__slug = self.kwargs.get('slug')
            ).get()
        except models.GroupMember.DoseNotExsist:
            messages.warning(self.request,"sorry you aren'/t in this group")

        else:
            membership.delete()
            messages.success(self.request,"you have left the group")
        return super().get(request,*args,**kwargs)    
