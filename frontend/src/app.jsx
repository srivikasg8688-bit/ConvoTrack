import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

import Dashboard from "./pages/dashboard";
import Meetings from "./pages/meetings";
import UploadMeeting from "./pages/uploadmeeting";
import MeetingDetails from "./pages/meetingdetails";
import Tasks from "./pages/tasks";
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