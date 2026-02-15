from django.db import models
from django.contrib.auth.models import AbstractUser

# --------------------
# Custom User
# --------------------
class User(AbstractUser):
    ROLE_CHOICES = (
        ('ADMIN', 'Admin'),
        ('WARDEN', 'Warden'),
        ('STUDENT', 'Student'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='STUDENT')

    def __str__(self):
        return self.username


# --------------------
# Student
# --------------------
class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)
    course = models.CharField(max_length=100)
    year = models.IntegerField()

    def __str__(self):
        return self.user.username


# --------------------
# Room
# --------------------
class Room(models.Model):
    room_number = models.CharField(max_length=10)
    capacity = models.IntegerField()
    occupied = models.IntegerField(default=0)
    status = models.CharField(max_length=20, default='AVAILABLE')

    def __str__(self):
        return self.room_number


# --------------------
# Allocation
# --------------------
class Allocation(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    allocated_date = models.DateField()

    def __str__(self):
        return f"{self.student} - {self.room}"


# --------------------
# Fee
# --------------------
class Fee(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    due_date = models.DateField()
    status = models.CharField(max_length=20, default='PENDING')

    def __str__(self):
        return f"{self.student} - {self.amount}"


# --------------------
# Complaint
# --------------------
class Complaint(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    status = models.CharField(max_length=20, default='OPEN')

    def __str__(self):
        return self.title
