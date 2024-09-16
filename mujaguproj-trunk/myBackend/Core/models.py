from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


    def profile(self):
        profile = Profile.objects.get(user=self)

class Skill(models.Model):
    name = models.CharField(max_length=15)

    def __str__(self):
        return self.name

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1000)
    bio = models.CharField(max_length=100)
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    verified = models.BooleanField(default=False)
    skills = models.ManyToManyField(Skill, blank=True)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)

class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    # job_title = models.CharField(max_length=15, null=True, blank=True)
    job_description = models.TextField()
    image = models.ImageField(upload_to='posts', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.author.username} - {self.content[:30]}'
    
class Job(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='job_posts')
    job_title = models.CharField(max_length=15)
    job_description = models.TextField()
    business_name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    tag= models.CharField(max_length=100, blank=True, null=True)
    qualification = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    apply_type = models.CharField(max_length=100)
    apply_email = models.CharField(max_length=100, null=True, blank=True)
    apply_url = models.CharField(max_length=100, null=True, blank=True)
    salary_type = models.CharField(max_length=100)
    job_salary = models.IntegerField()
    min_salary = models.IntegerField()
    max_salary = models.IntegerField()
    experience = models.CharField(max_length=100)
    application_deadline = models.DateField()
    career_level = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    image = models.ImageField(upload_to='posts', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)