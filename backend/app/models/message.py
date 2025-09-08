from pydantic import BaseModel
from typing import List, Optional

class Message(BaseModel):
    from_number: str
    text: str

class WebhookPayload(BaseModel):
    object: str
    entry: List[dict]
