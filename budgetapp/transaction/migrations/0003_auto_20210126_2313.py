# Generated by Django 3.1.5 on 2021-01-26 23:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0003_auto_20210126_2313'),
        ('transaction', '0002_auto_20210126_2310'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='category',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='category.category'),
        ),
    ]