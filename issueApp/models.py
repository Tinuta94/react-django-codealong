from django.db import models

class User(models.Model):
    email    = models.EmailField(max_length=25)
    userName = models.CharField(max_length=10)

class Issue(models.Model):
    description = models.CharField(max_length=30)
    status      = models.BooleanField()
    createdOn   = models.DateTimeField(auto_now=True)
    user        = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users')

# Create your models here.
