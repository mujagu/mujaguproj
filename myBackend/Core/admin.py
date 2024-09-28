from django.contrib import admin
from Core.models import User,Profile,Post,Job, Muse, Project, Review

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']


class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['user', 'full_name' ,'verified']

admin.site.register(User, UserAdmin)
admin.site.register( Profile,ProfileAdmin)
admin.site.register( Post )
admin.site.register( Job )
admin.site.register( Muse)
admin.site.register( Project)
admin.site.register(Review)