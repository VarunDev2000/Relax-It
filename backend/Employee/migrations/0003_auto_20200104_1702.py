# Generated by Django 3.0.2 on 2020-01-04 17:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Employee', '0002_auto_20200104_2027'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employee',
            old_name='angry',
            new_name='Angry',
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='disgusted',
            new_name='Disgusted',
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='happy',
            new_name='Happy',
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='neutral',
            new_name='Neutral',
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='sad',
            new_name='Sad',
        ),
    ]
