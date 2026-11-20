import { useEffect, useState } from "react";
import { getMeetings, getTasks } from "../services/api";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const [meetings, setMeetings] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [meetingResponse, taskResponse] =
          await Promise.all([getMeetings(), getTasks()]);

        setMeetings(meetingResponse.data);
        setTasks(taskResponse.data);
      } catch {
        setError("Unable to load dashboard. Check backend connection.");
      }
    }

    loadDashboard();
  }, []);

  const completed = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-slate-500 mt-2">
          Everything happening across your meetings.
        </p>
      </div>

      {error && (
        <p className="text-red-600 mb-5">{error}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <StatCard
          title="Total Meetings"
          value={meetings.length}
          description="Meetings in your workspace"
        />

        <StatCard
          title="Total Tasks"
          value={tasks.length}
          description="Extracted action items"
        />

        <StatCard
          title="Completed Tasks"
          value={completed}
          description="Tasks marked completed"
        />
      </div>

      <div className="mt-10 bg-white rounded-2xl p-6 border">
        <h2 className="text-xl font-bold mb-5">
          Recent Meetings
        </h2>

        {meetings.length === 0 ? (
          <p className="text-slate-500">
            No meetings available yet.
          </p>
        ) : (
          meetings.slice(0, 5).map((meeting) => (
            <div
              key={meeting.id}
              className="py-4 border-b last:border-0"
            >
              <h3 className="font-semibold">
                {meeting.title}
              </h3>
              <p className="text-sm text-slate-500">
                {meeting.date || "Date unavailable"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}