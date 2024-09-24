from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser
import uuid


class User(AbstractUser):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)


    def profile(self):
        profile = Profile.objects.get(user=self)

###
class Profile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1000)
    bio = models.TextField()
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    verified = models.BooleanField(default=False)
    skills = models.CharField(max_length=100)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)

###
class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    job_description = models.TextField()
    image = models.ImageField(upload_to='posts', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.author.username} - {self.job_description[:30]}'
    
###
class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='likes')

    def __str__(self):
        return f'Like by {self.user.username} on {self.post.job_description[:10]}'

    class Meta:
        unique_together = ('user', 'post')

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Comment by {self.user.username} on {self.post}'

class Bookmark(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='bookmarks')

    def __str__(self):
        return f'Bookmark by {self.user.username} on {self.post.title}'

    class Meta:
        unique_together = ('user', 'post')
    
###
class Job(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
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
    min_salary = models.IntegerField()
    max_salary = models.IntegerField()
    experience = models.CharField(max_length=100)
    application_deadline = models.DateField()
    career_level = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    image = models.ImageField(upload_to='posts', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.job_title} - {self.author.username}"
    

###
class Message(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages')
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f'From {self.sender} to {self.receiver}'

    class Meta:
        ordering = ['-timestamp']


###
class Skills(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    skill = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.author.username} - {self.skill}"

    class Meta:
        verbose_name_plural = 'Skills'

###
class Project(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='project')
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    cover_image = models.ImageField(upload_to='project_images', default='default.jpg', null=True, blank=True)
    upload_images =  models.ImageField(upload_to='project_images', default='default.jpg', null=True, blank=True)
    description = models.TextField()
    service_title = models.CharField(max_length=100)
    short_description = models.CharField(max_length=100)
    delivery_time = models.DateTimeField()
    revision_number = models.IntegerField(null=True, blank=True)
    add_features = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.category} - {self.author.username}"
    
###
class Muse(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='muse')
    video_field = models.FileField(upload_to='muse')
    caption = models.CharField(max_length=100)

    def __str__(self):
        return self.author.username