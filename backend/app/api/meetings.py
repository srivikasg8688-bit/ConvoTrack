
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional

from app.database.supabase_client import get_supabase

router = APIRouter(
    prefix="/api/meetings",
    tags=["Meetings"]
)

supabase = get_supabase()


class MeetingCreate(BaseModel):
    created_by: str
    title: str
    audio_path: Optional[str] = None
    transcript: Optional[str] = None


@router.post("/")
def create_meeting(meeting: MeetingCreate):
    try:
        result = supabase.table("meetings").insert({
            "created_by": meeting.created_by,
            "title": meeting.title,
            "audio_path": meeting.audio_path,
            "transcript": meeting.transcript
        }).execute()

        return {
            "success": True,
            "message": "Meeting created successfully",
            "data": result.data
        }

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error)
        )


@router.get("/")
def get_meetings():
    try:
        result = supabase.table("meetings").select(
            "*"
        ).order("created_at", desc=True).execute()

        return {
            "success": True,
            "data": result.data
        }

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error)
        )


@router.get("/{meeting_id}")
def get_meeting(meeting_id: str):
    try:
        result = supabase.table("meetings").select(
            "*"
        ).eq("id", meeting_id).execute()

        if not result.data:
            raise HTTPException(
                status_code=404,
                detail="Meeting not found"
            )

        return {
            "success": True,
            "data": result.data[0]
        }

    except HTTPException:
        raise

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error)
        )
