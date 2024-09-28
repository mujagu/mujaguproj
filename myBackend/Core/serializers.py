from Core.models import User, Post, Job, Muse, Project, Profile
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers, generics
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        # These are claims, you can add custom claims
        token['full_name'] = user.profile.full_name
        token['username'] = user.username
        token['email'] = user.email
        token['bio'] = user.profile.bio
        token['image'] = str(user.profile.image)
        token['verified'] = user.profile.verified
        # ...
        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']

        )

        user.set_password(validated_data['password'])
        user.save()

        return user
    
class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True, many=False)
    class Meta:
       model = Profile
       fields = ('user', 'full_name', 'bio', 'image', 'verified')

    
class PostSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Job
        fields = ('id', 'author', 'job_description', 'image', 'created_at')

class JobListSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True, many=False)
    class Meta:
        model = Job
        fields = (
            'id',
            'author',
            # 'job_title',
            'job_description',
            'image',
        )
class JobSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True, many=False)
    class Meta:
        model = Job
        fields = '__all__'

class MuseSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True, many=False)
    class Meta:
        model = Muse
        fields = '__all__'

class ProjectDetailSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True, many=False)
    class Meta:
        model = Project
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True, many=False)
    class Meta:
        model = Project
        fields = (
            'id',
            'author',
            'cover_image',
            'short_description',
            'delivery_time',
            'price',
        )
