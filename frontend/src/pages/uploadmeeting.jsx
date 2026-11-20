import { useState } from "react";
import { uploadMeeting } from "../services/api";

export default function UploadMeeting() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleUpload(e) {
    e.preventDefault();

    if (!file || !title.trim()) {
      setMessage("Enter a title and select an audio file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      setLoading(true);
      setMessage("");

      const response = await uploadMeeting(formData);

      setMessage(
        response.data.message || "Meeting uploaded successfully!"
      );

      setTitle("");
      setFile(null);
    } catch (error) {
      setMessage(
        error.response?.data?.detail || "Upload failed."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-3">
        Upload Meeting
      </h1>

      <p className="text-slate-500 mb-8">
        Upload your recording to convert conversations into action.
      </p>

      <form
        onSubmit={handleUpload}
        className="bg-white p-8 rounded-2xl border space-y-6"
      >
        <div>
          <label className="block font-semibold mb-2">
            Meeting Title
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter meeting title"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Meeting Recording
          </label>

          <input
            type="file"
            accept="audio/*,.wav,.mp3,.m4a"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border rounded-xl p-3"
          />
        </div>

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white rounded-xl p-3 font-semibold disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload Meeting"}
        </button>

        {message && (
          <p className="text-sm text-blue-700">{message}</p>
        )}
      </form>
    </div>
  );
}
