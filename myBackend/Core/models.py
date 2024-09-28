import uuid

from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


    def profile(self):
        profile = Profile.objects.get(user=self)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1000)
    bio = models.CharField(max_length=1000)
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    verified = models.BooleanField(default=False)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)

class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    job_description = models.TextField()
    image = models.ImageField(upload_to='posts', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.author.username} - {self.job_description[:30]}'
    
class Job(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='job_posts')
    job_title = models.CharField(max_length=15, null=True, blank=True)
    job_description = models.TextField()
    business_name = models.CharField(max_length=100, null=True, blank=True)
    category = models.CharField(max_length=100, null=True, blank=True)
    job_type = models.CharField(max_length=100, null=True, blank=True)
    tag= models.CharField(max_length=100, blank=True, null=True)
    qualification = models.CharField(max_length=100, null=True, blank=True)
    gender = models.CharField(max_length=100, null=True, blank=True)
    apply_type = models.CharField(max_length=100, null=True, blank=True)
    apply_email = models.CharField(max_length=100, null=True, blank=True)
    apply_url = models.CharField(max_length=100, null=True, blank=True)
    salary_type = models.CharField(max_length=100, null=True, blank=True)
    min_salary = models.IntegerField(null=True, blank=True)
    max_salary = models.IntegerField(null=True, blank=True)
    experience = models.CharField(max_length=100, null=True, blank=True)
    application_deadline = models.DateField(null=True, blank=True)
    career_level = models.CharField(max_length=100, null=True, blank=True)
    gender = models.CharField(max_length=100, null=True, blank=True)
    image = models.ImageField(upload_to='posts', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.author.username} - {self.job_description[:30]}'
    
class Muse(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='muse')
    video = models.FileField(upload_to='muse')
    caption = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.author.username
    
class Project(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='project')
    project_title = models.CharField(max_length=15)
    category = models.CharField(max_length=100)
    cover_image = models.ImageField(upload_to='project_images', default='default.jpg', null=True, blank=True)
    upload_images =  models.ImageField(upload_to='project_images', default='default.jpg', null=True, blank=True)
    description = models.TextField()
    service_title = models.CharField(max_length=100)
    short_description = models.CharField(max_length=100)
    delivery_time = models.IntegerField(null=True, blank=True)
    revision_number = models.IntegerField(null=True, blank=True)
    features = models.TextField(null=True, blank=True)
    price=models.IntegerField(null=True,blank=True)
    Reviews=models.IntegerField(null=True,blank=True,default=0)
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.project_title} - {self.author.username}"
    
class Review(models.Model):
    project=models.ForeignKey(Project,on_delete=models.SET_NULL,null=True)
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    name=models.CharField(max_length=200,null=True,blank=True)
    rating=models.IntegerField(null=True,blank=True,default=0)
    comment=models.TextField(null=True,blank=True)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return str(self.rating)