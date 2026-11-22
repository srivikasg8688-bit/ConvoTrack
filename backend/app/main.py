
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import meetings
from app.database.supabase_client import test_connection

app = FastAPI(
    title="MeetFlow AI Backend",
    description="AI-powered Meeting Management System",
    version="1.0.0"
)

# Frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routes
app.include_router(meetings.router)


@app.get("/")
def home():
    return {
        "message": "Welcome to MeetFlow AI Backend"
    }


@app.get("/health/db")
def database_health():
    return test_connection()
