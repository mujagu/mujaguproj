from django.urls import path
from . import views
from . import api

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('profile/current/', views.UserProfileDetail.as_view(), name='user-profile-detail'),
    # user
    path('user/', views.getUser, name='user'),
    path('user/<uuid:pk>/', views.getUserProfile, name='user_detail'),
    path('', views.getRoutes),
    path('posts/', views.PostListCreateView.as_view(), name='posts'),
    path('jobs/', views.JobListCreateView.as_view(), name='jobs'),
    path('jobs/<uuid:pk>/', views.jobs_detail, name='job_detail'),
    path('muse/', views.MuseCreateView.as_view(), name='muse'),
    path('project/', views.ProjectCreateView.as_view(), name='project'),
    path('project/<uuid:pk>/', views.project_detail, name='project_detail'),
]