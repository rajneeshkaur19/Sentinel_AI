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
    <aside className="flex min-h-screen w-72 xl:w-80 flex-col border-r border-slate-800 bg-slate-950/95 px-6 py-8 backdrop-blur-xl">
      {/*logo section*/}
      <div className = "mb-8">
        <div className = "flex items-center gap-4">
          <div className = "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-800 to-indigo-500 shadow-[0_0_25px_rgba(139,92,246,0.45)] transition-all duration-300 hover:scale-105">
          <Shield size = {26} className = "text-white"/>
          </div>
          <div>
            <h1 className="bg-gradient-to-r from-white via-violet-200 to-indigo-300 bg-clip-text text-2xl font-extrabold text-transparent">
              🛡 SentinelAI
            </h1>
            <p className = "mt-1 text-sm tracking-wide text-slate-400">
              AI-Powered Security
            </p>
          </div>
        </div>
      </div>
      <div className = "mb-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"/>

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