from django.urls import path, include
from .views import SignupView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('', include('dj_rest_auth.urls')),
]
