# Generated by Django 5.0.7 on 2024-09-21 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Core', '0004_alter_job_id_alter_post_id_alter_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]