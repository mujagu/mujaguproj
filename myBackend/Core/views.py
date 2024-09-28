from django.shortcuts import render
from django.http import JsonResponse
from Core.models import User, Job, Muse, Project, Profile

from rest_framework import generics, permissions
from .models import Post
from .serializers import PostSerializer, UserProfileSerializer

from Core.serializers import MyTokenObtainPairSerializer, UserSerializer, RegisterSerializer, PostSerializer, JobSerializer, MuseSerializer, ProjectSerializer, JobListSerializer, ProjectDetailSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

class UserProfileDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer

    def get_object(self):
        return Profile.objects.get(user=self.request.user)


# Get All Routes

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getUserProfile(request, pk):
    user = User.objects.get(pk=pk)
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getUser(request):
    user=User.objects.all()
    serializer=UserSerializer(user,many=True)
    return Response(serializer.data)

class PostListCreateView(generics.ListCreateAPIView):
    queryset = Job.objects.all().order_by('-created_at')
    serializer_class = JobListSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class JobListCreateView(generics.ListCreateAPIView):
    queryset = Job.objects.all().order_by('-created_at')
    serializer_class = JobListSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def jobs_detail(request, pk):
    jobs = Job.objects.get(pk=pk)
    serializer=JobSerializer(jobs,many=False)
    return Response(serializer.data)


class MuseCreateView(generics.ListCreateAPIView):
    queryset = Muse.objects.all().order_by('-created_at')
    serializer_class = MuseSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class ProjectCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def project_detail(request, pk):
    project = Project.objects.get(pk=pk)
    serializer=ProjectDetailSerializer(project,many=False)
    return Response(serializer.data)

class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectDetailSerializer