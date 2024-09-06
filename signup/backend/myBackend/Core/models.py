from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    profile_pic = models.ImageField(upload_to='images/profile_pics', null=True, blank=True)
    cover_photo = models.ImageField(upload_to='images/cover_photos', null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)
    #user_type

    def __str__(self):
        return self.username

class Jobs(models.Model):
    job_title = models.CharField(max_length=15)
    job_description = models.TextField()
    budget = models.CharField(max_length=10)
    deadline = models.DurationField()
    client_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)
    #status = 

class Proposals(models.Model):
    job_id = models.ForeignKey(Jobs, on_delete=models.CASCADE)
    freelacer_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    proposal_text = models.TextField()
    proposed_budget = models.CharField(max_length=15)
    proposal_date = models.DateTimeField(auto_now_add=True)
    #status

class Contracts(models.Model):
    job_id = models.ForeignKey(Jobs, on_delete=models.CASCADE)
    freelancer_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    #status

class Payments(models.Model):
    contract_id = models.ForeignKey(Contracts, on_delete=models.CASCADE)
    amount = models.CharField(max_length=15)
    payment_date = models.DateField()
    payment_method = models.CharField(max_length=15)

class Reviews(models.Model):
    contract_id = models.ForeignKey(Contracts, on_delete=models.CASCADE)
    reviewer_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    rating = models.CharField(max_length=15)
    review_text = models.TextField()
    review_date = models.DateTimeField(auto_now_add=True)

class Messages(models.Model):
    sender_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    receiver_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    job_id = models.ForeignKey(Jobs, on_delete=models.CASCADE)
    message = models.TextField()
    sent_date = models.DateTimeField(auto_now_add=True)

class Skills(models.Model):
    skill_name = models.CharField(max_length=15)

