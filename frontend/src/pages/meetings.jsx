import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMeetings } from "../services/api";

export default function Meetings() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    getMeetings()
      .then((response) => setMeetings(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Meetings</h1>

      <div className="grid md:grid-cols-2 gap-5">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="bg-white p-6 rounded-2xl border"
          >
            <h2 className="font-bold text-lg">
              {meeting.title}
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              {meeting.date || "Date unavailable"}
            </p>

            <Link
              to={`/meetings/${meeting.id}`}
              className="inline-block mt-5 text-blue-600 font-semibold"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}