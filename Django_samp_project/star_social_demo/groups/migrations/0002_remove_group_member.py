# Generated by Django 3.0.3 on 2020-03-10 06:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='group',
            name='member',
        ),
    ]
