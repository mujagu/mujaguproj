# Generated by Django 5.0.7 on 2024-09-23 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Core', '0010_alter_project_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='delivery_time',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]