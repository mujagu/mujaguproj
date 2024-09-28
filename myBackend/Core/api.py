from django.http import JsonResponse

from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .models import User
from .serializers import UserSerializer, JobSerializer



@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def user_detail(request, pk):
    user = User.objects.get(pk=pk)

    serializer = UserSerializer(user, many=False)

    return JsonResponse(serializer.data, safe=False)

# @api_view(['GET'])
# @authentication_classes([])
# @permission_classes([])
# def jobs_detail(request, pk):
#     job = Jobs.objects.get(pk=pk)

#     serializer = JobSerializer(job, many=False)

#     return JsonResponse(serializer.data)
