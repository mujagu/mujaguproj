from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('profile/', views.ProfileDetailView.as_view(), name='profile'),
    path('posts/', views.PostListCreateView.as_view(), name='posts'),
    path('jobs/', views.JobListCreateView.as_view(), name='jobs'),
    path('messages/<int:user_id>/', views.MessageListView.as_view(), name='message_list'),
    path('messages/send/', views.SendMessageView.as_view(), name='send_message'),
    path('bookmark/<int:post_id>/', views.BookmarkPostView.as_view(), name='bookmark'),

    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),
]