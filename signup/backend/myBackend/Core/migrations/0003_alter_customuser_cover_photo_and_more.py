# Generated by Django 5.0.7 on 2024-09-02 20:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Core', '0002_alter_customuser_cover_photo_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='cover_photo',
            field=models.ImageField(blank=True, null=True, upload_to='images/cover_photos'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='profile_pic',
            field=models.ImageField(blank=True, null=True, upload_to='images/profile_pics'),
        ),
    ]
