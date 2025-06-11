from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Inclui URLs do app 'api', se existir
    path('blogs/', include('blogs.urls')),  # Inclui URLs do app 'blogs', se existir
]