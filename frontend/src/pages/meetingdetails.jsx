import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMeeting } from "../services/api";

export default function MeetingDetails() {
  const { id } = useParams();
  const [meeting, setMeeting] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getMeeting(id)
      .then((response) => setMeeting(response.data))
      .catch(() => setError("Unable to load meeting details."));
  }, [id]);

  if (error) return <p className="p-8 text-red-600">{error}</p>;

  if (!meeting) return <p className="p-8">Loading meeting...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{meeting.title}</h1>

      <div className="bg-white border rounded-2xl p-6 mt-6">
        <h2 className="text-xl font-bold mb-4">Meeting Summary</h2>

        <p className="text-slate-600 whitespace-pre-wrap">
          {meeting.summary || "Summary is not available yet."}
        </p>
      </div>

      <div className="bg-white border rounded-2xl p-6 mt-6">
        <h2 className="text-xl font-bold mb-4">Transcript</h2>

        <p className="text-slate-600 whitespace-pre-wrap">
          {meeting.transcript || "Transcript is not available yet."}
        </p>
      </div>
    </div>
  );
}