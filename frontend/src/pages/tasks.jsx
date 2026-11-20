import { useEffect, useState } from "react";
import { getTasks, updateTask } from "../services/api";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Unable to load tasks", error);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function completeTask(task) {
    try {
      await updateTask(task.id, {
        status: "completed",
      });

      loadTasks();
    } catch (error) {
      console.error("Unable to update task", error);
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Action Items</h1>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white border rounded-xl p-5 flex justify-between items-center gap-4"
          >
            <div>
              <h3 className="font-semibold">{task.title}</h3>

              <p className="text-sm text-slate-500 mt-1">
                Assigned to: {task.assigned_to || "Unassigned"}
              </p>

              <p className="text-sm text-slate-500">
                Deadline: {task.deadline || "Not specified"}
              </p>

              <span className="text-xs text-blue-600">
                {task.status}
              </span>
            </div>

            {task.status !== "completed" && (
              <button
                onClick={() => completeTask(task)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Complete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}