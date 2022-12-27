from django.db import models

# Create your models here.
class Message(models.Model):
    body = models.TextField(null=False)
    user_id = models.IntegerField()