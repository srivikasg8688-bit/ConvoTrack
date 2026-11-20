export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8">
      <h2 className="font-semibold text-lg">Workspace</h2>

      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-500">
          Meeting Workspace
        </span>

        <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
          M
        </div>
      </div>
    </header>
  );
}