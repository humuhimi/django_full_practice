from django.contrib import admin
from . import models
# Register your models here.

class GroupMemberInline(admin.TabularInline):
    model = models.GroupMember

class GroupAdmin(admin.ModelAdmin):
    fields = ['name','slug','description']
    search_fields = ['name','description']


admin.site.register(models.Group,GroupAdmin)
admin.site.register(models.GroupMember)