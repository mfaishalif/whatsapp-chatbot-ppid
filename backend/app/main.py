from fastapi import FastAPI
from .api import whatsapp

app = FastAPI(title="WhatsApp Chatbot")

app.include_router(whatsapp.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Backend is running"}
