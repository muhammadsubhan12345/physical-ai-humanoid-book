from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Question(BaseModel):
    question: str

BOOK_TEXTS = [
    "Robots are machines that can perform tasks automatically.",
    "Sensors detect physical properties like temperature, light, and motion.",
    "Actuators perform actions based on instructions.",
]

@app.post("/ask")
async def ask_question(q: Question):
    query = q.question.lower()
    matched = [b for b in BOOK_TEXTS if any(word in query for word in b.lower().split())]
    if not matched:
        matched = ["Sorry, I could not find an answer."]
    return {"answer": matched[0]}
