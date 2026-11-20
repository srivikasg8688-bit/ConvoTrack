import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Meetings from "./pages/Meetings";
import UploadMeeting from "./pages/UploadMeeting";
import MeetingDetails from "./pages/MeetingDetails";
import Tasks from "./pages/Tasks";
import Decisions from "./pages/Decisions";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 min-w-0">
          <Navbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/meetings/:id" element={<MeetingDetails />} />
            <Route path="/upload" element={<UploadMeeting />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/decisions" element={<Decisions />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;