export default function StatCard({ title, value, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <p className="text-slate-500 text-sm">{title}</p>

      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>

      <p className="text-xs text-slate-400 mt-2">
        {description}
      </p>
    </div>
  );
}