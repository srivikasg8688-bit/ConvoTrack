import { useEffect, useState } from "react";
import { getDecisions } from "../services/api";

export default function Decisions() {
  const [decisions, setDecisions] = useState([]);

  useEffect(() => {
    getDecisions()
      .then((response) => setDecisions(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Meeting Decisions
      </h1>

      <div className="space-y-4">
        {decisions.map((decision) => (
          <div
            key={decision.id}
            className="bg-white p-5 rounded-xl border"
          >
            <h3 className="font-semibold">
              {decision.title || decision.description}
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              {decision.description}
            </p>

            <p className="text-xs text-blue-600 mt-3">
              Status: {decision.status || "Recorded"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}