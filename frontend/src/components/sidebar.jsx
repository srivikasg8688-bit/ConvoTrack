import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Video,
  Upload,
  CheckSquare,
  Lightbulb,
} from "lucide-react";

const links = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Meetings", path: "/meetings", icon: Video },
  { name: "Upload Meeting", path: "/upload", icon: Upload },
  { name: "Action Items", path: "/tasks", icon: CheckSquare },
  { name: "Decisions", path: "/decisions", icon: Lightbulb },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-2xl font-bold mb-2">MeetFlow AI</h1>
      <p className="text-slate-400 text-xs mb-10">
        Conversations to Completion
      </p>

      <nav className="space-y-3">
        {links.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            <Icon size={19} />
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}