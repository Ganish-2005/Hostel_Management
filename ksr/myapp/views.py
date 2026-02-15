from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from .models import User, Student, Room, Allocation, Fee, Complaint
from .serializers import (
    UserSerializer,
    StudentSerializer,
    RoomSerializer,
    AllocationSerializer,
    FeeSerializer,
    ComplaintSerializer,
    RegisterSerializer
)


# ==========================
# REGISTER API
# ==========================
@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ==========================
# VIEWSETS
# ==========================

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]   # optional


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class AllocationViewSet(viewsets.ModelViewSet):
    queryset = Allocation.objects.all()
    serializer_class = AllocationSerializer


class FeeViewSet(viewsets.ModelViewSet):
    queryset = Fee.objects.all()
    serializer_class = FeeSerializer


class ComplaintViewSet(viewsets.ModelViewSet):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer
