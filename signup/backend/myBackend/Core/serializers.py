from django.contrib.auth.models import User
from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name', 'profile_pic', 'cover_photo', 'bio')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_pic = validated_data.pop('profile_pic', None)
        cover_photo = validated_data.pop('cover_photo', None)
        bio = validated_data.pop('bio', '')

        user = CustomUser.objects.create_user(**validated_data)

        if profile_pic:
            user.profile_pic = profile_pic
        if cover_photo:
            user.cover_photo = cover_photo
        user.bio = bio

        user.save()

        return user
