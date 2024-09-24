from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, CommentViewSet

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('profile/', views.ProfileDetailView.as_view(), name='profile'),
    path('', include(router.urls)),

    path('jobs/', views.JobListCreateView.as_view(), name='jobs'),
    # path('jobs/<uuid:pk>', views.JobListCreateViewDetails, name='jobs'),
    path('messages/<int:user_id>/', views.MessageListView.as_view(), name='message_list'),
    path('messages/send/', views.SendMessageView.as_view(), name='send_message'),
    path('skills/', views.SkllsCreateView.as_view(), name='skills'),
    path('project/', views.ProjectCreateView.as_view(), name='project'),
    path('muse/', views.MuseCreateView.as_view(), name='muse'),

    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),
]