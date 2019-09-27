from rest_framework import serializers    
from .models import Issue, User

class IssueSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Issue   
        fields = ['id', 'description', 'status', 'createdOn', 'user']

class UserSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = User    
        fields = ['id', 'email', 'userName']