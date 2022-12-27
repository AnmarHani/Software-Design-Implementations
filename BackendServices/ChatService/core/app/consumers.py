import json
from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import sync_to_async
from .models import Message
from .serializers import MessageSerializer
from channels.db import database_sync_to_async
from django.core.cache import cache

class Consumer(AsyncWebsocketConsumer):

    @database_sync_to_async
    def get_messages(self):
        all_messages = Message.objects.all()
        serializer = MessageSerializer(all_messages, many=True)
        return serializer.data

    @sync_to_async
    def clear_cache(self):
        cache.clear()
        return True

    @sync_to_async
    def save_message(self, msg):
        new_message = Message(body=msg["body"], user_id=msg["user_id"])
        serializer = MessageSerializer(data=new_message.__dict__)
        if serializer.is_valid():
            serializer.save()
            return serializer.data
        return False

    async def connect(self):
        await self.accept()
        self.room_group_name = "chat_room" # or scope["path"]

        # adds a group to the channel
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)

        # push msg to a group
        await self.channel_layer.group_send(self.room_group_name, {
                "type":"send_all_messages", # is a function that we can make
                "message":"send_all_messages"
            }
        )

    async def send_all_messages(self, event):
        # send actaul data to the group that pushed a msg with this type
        data = await self.get_messages()
        await self.send(text_data=json.dumps({
            "all_messages": data,
            "message": event["message"]
        }))

    async def receive(self, text_data):
        # text_data is sent from the client with websocket.send
        data = json.loads(text_data)
        saved_message = await self.save_message(msg=data)
        self.send(text_data=json.dumps({
            "saved_message": saved_message,
            "message": "Okay"
        }))

    async def disconnect(self, code):
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)