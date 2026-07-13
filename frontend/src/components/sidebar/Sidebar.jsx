import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
        🛡 SentinelAI
      </h1>

      <nav className="flex flex-col gap-4">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/malware-scanner">Malware Scanner</NavLink>
        <NavLink to="/threat-intel">Threat Intelligence</NavLink>
        <NavLink to="/ai-assistant">AI Assistant</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/url-scanner">URL Scanner</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;