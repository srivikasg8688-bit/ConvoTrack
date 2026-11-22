
import os
from pathlib import Path

from dotenv import load_dotenv
from supabase import create_client, Client

# Load backend environment variables
BACKEND_DIR = Path(__file__).resolve().parents[2]
load_dotenv(BACKEND_DIR / ".env")

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SECRET_KEY = os.getenv("SUPABASE_SECRET_KEY")

if not SUPABASE_URL or not SUPABASE_SECRET_KEY:
    raise RuntimeError(
        "SUPABASE_URL or SUPABASE_SECRET_KEY is missing in .env"
    )

# Create Supabase connection
supabase: Client = create_client(
    SUPABASE_URL,
    SUPABASE_SECRET_KEY
)


def get_supabase():
    return supabase


def test_connection():
    try:
        response = supabase.table("meetings").select(
            "id"
        ).limit(1).execute()

        return {
            "connected": True,
            "message": "Supabase database connected successfully"
        }

    except Exception as error:
        return {
            "connected": False,
            "message": str(error)
        }
