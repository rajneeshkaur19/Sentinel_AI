import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6 shadow-xl">
      <h1 className="text-3xl font-bold mb-10 text-cyan-400">
        🛡 SentinelAI
      </h1>

      <nav className="flex flex-col gap-3">
        <SidebarItem title = "Dashboard" to = "/" />
        <SidebarItem title = "URL Scanner" to = "/url-scanner" />
        <SidebarItem title = "Malware Scanner" to = "/malware-scanner" />
        <SidebarItem title = "Threat Intelligence" to = "/threat-intel" />
        <SidebarItem title = "AI Assistant" to = "/ai-assistant" />
        <SidebarItem title = "Reports" to = "/reports" />
        <SidebarItem title = "Settings" to = "/settings" />

      </nav>
    </aside>
  );
}

export default Sidebar;