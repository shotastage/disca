# Generated by Django 2.2.1 on 2019-05-31 02:13

from django.db import migrations, models
import home.models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('app', models.CharField(max_length=255)),
                ('app_type', models.CharField(max_length=255)),
                ('url', models.CharField(max_length=255)),
            ],
        ),
        migrations.AlterField(
            model_name='team',
            name='identification',
            field=models.CharField(default=home.models.generateID, max_length=255),
        ),
    ]
