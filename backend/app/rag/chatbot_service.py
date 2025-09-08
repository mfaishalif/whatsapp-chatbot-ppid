import os
from ollama import Client

class ChatbotService:
    def __init__(self):
        self.client = Client(host=os.getenv("OLLAMA_HOST", "http://localhost:11434"))

    def process_message(self, message: str) -> str:
        # Placeholder for LangGraph logic
        # For now, let's just echo the message with a prefix
        response = self.client.chat(
            model='llama3.2', 
            messages=[{'role': 'user', 'content': message}]
        )
        return response['message']['content']

cbot_service = ChatbotService()
