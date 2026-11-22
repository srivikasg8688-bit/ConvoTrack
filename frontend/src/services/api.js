import axios from "axios";

// Render backend URL
const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:8000"
).replace(/\/+$/, "");

// Axios instance
const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

// Meetings APIs
export const getMeetings = () =>
  API.get("/api/meetings");

export const getMeeting = (id) =>
  API.get(`/api/meetings/${id}`);

export const uploadMeeting = (formData) =>
  API.post("/api/meetings/upload", formData);

// Tasks APIs
export const getTasks = () =>
  API.get("/api/tasks");

export const updateTask = (id, data) =>
  API.patch(`/api/tasks/${id}`, data);

// Decisions APIs
export const getDecisions = () =>
  API.get("/api/decisions");

// Export Axios instance
export default API;