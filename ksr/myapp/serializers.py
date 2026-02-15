from rest_framework import serializers
from .models import User, Student, Room, Allocation, Fee, Complaint
from django.contrib.auth.hashers import make_password

# --------------------
# User Serializer
# --------------------
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return User.objects.create(**validated_data)
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'role']

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'


class AllocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Allocation
        fields = '__all__'


class FeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fee
        fields = '__all__'


class ComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complaint
        fields = '__all__'
