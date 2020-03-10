from django.contrib import admin

# Register your models here.
from . import models

class PostAdmin(admin.ModelAdmin):
    fields = ['user','created_at','message','group']
    search_fields = ['user','message','group']
    list_filter = ['user','created_at','message','group']
    list_display = ['user','group','message','created_at']
    list_editable = ['message']

admin.site.register(models.Post,PostAdmin)