import {
  LayoutDashboard,
  Shield,
  Globe,
  BarChart3,
  Bot,
  FileText,
  Settings,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-72 flex-col border-r border-slate-800 bg-slate-950/95 px-6 py-8 backdrop-blur-xl">
      {/*logo section*/}
      <div className = "mb-10">
        <div className = "flex items-center gap-3">
          <div className = "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-500 shadow-lg shadow-violet-500/30">
          <Shield size = {26} className = "text-white"/>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">
              🛡 SentinelAI
            </h1>
            <p className = "text-sm text-slate-400">
              AI-Powered Security
            </p>
          </div>
        </div>
      </div>

      {/*Navigation*/}
      <nav className="flex flex-col gap-2">
        <SidebarItem icon = {LayoutDashboard} title = "Dashboard" to = "/" />
        <SidebarItem icon = {Shield} title = "URL Scanner" to = "/url-scanner" />
        <SidebarItem icon = {Globe} title = "Malware Scanner" to = "/malware-scanner" />
        <SidebarItem icon = {BarChart3} title = "Threat Intelligence" to = "/threat-intel" />
        <SidebarItem icon = {Bot} title = "AI Assistant" to = "/ai-assistant" />
        <SidebarItem icon = {FileText} title = "Reports" to = "/reports" />
        <SidebarItem icon = {Settings} title = "Settings" to = "/settings" />

      </nav>
      <SidebarFooter/>
    </aside>
  );
}

export default Sidebar;