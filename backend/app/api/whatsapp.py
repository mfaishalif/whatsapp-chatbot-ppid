from fastapi import APIRouter, Request, Response
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()

@router.post("/whatsapp/webhook")
async def receive_message(request: Request):
    body = await request.json()
    logger.info(f"Received webhook: {body}")
    # Your message processing logic will go here
    return Response(status_code=200)

@router.get("/whatsapp/webhook")
def verify_webhook(request: Request):
    # This is for the initial WhatsApp webhook verification
    if request.query_params.get("hub.mode") == "subscribe" and request.query_params.get("hub.challenge"):
        logger.info("Webhook verified")
        return Response(content=request.query_params["hub.challenge"], media_type="text/plain")
    return Response(content="Invalid verification request", status_code=400)
