# Generated by Django 3.0.4 on 2020-06-02 03:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='uuid',
            field=models.UUIDField(default=None),
            preserve_default=False,
        ),
    ]
