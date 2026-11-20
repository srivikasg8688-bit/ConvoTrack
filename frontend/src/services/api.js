import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getMeetings = () => API.get("/api/meetings");

export const getMeeting = (id) =>
  API.get(`/api/meetings/${id}`);

export const uploadMeeting = (formData) =>
  API.post("/api/meetings/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getTasks = () => API.get("/api/tasks");

export const updateTask = (id, data) =>
  API.patch(`/api/tasks/${id}`, data);

export const getDecisions = () =>
  API.get("/api/decisions");

export default API;