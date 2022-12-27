from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MessageSerializer
from .models import Message
from django.core.cache import cache
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie, vary_on_headers
from rest_framework import status

# Cache for one hour for every user, identify every cache/user with the header
# @method_decorator(cache_page(60*60)) 
# @method_decorator(vary_on_headers("Authorization"))
@api_view(["GET"])
def index(request):
    all_messages = Message.objects.all()
    serializer = MessageSerializer(all_messages , many=True)

    return Response({
        "messages": serializer.data 
    })

@api_view(["POST"])
def create(request):
    newMessage = Message(body=request.data["body"], user_id=request.data["user_id"])
    serializer = MessageSerializer(data=newMessage.__dict__)
    if(serializer.is_valid()):
        serializer.save()
        return Response({
            "data": serializer.data
        }) 

    return Response({
        "data": "not valid",
    }, status=status.HTTP_400_BAD_REQUEST) 
