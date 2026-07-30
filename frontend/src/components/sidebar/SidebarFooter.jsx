import {UserCircle2, ChevronRight, ShieldCheck} from "lucide-react";
function SidebarFooter(){
    return(
        <div className = "mt-auto pt-6">
            <div className = "h-px bg-gradiant-to-r from-transparent via-slate-700 to-transparent mb-6"/>
            <button className = "group w-full rounded-2xl border border-slate-800 bg-gradiant-to-br from-slate-900/90 to-slate-950 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                <div className = "flex items-center justify-between">
                    <div className = "flex items-center gap-3">
                        <div className = "relative">
                            <div className = "rounded-full bg-gradiant-to-br from-violet-600/20 to-indigo-600/20 p-2">
                                <UserCircle2 size={42} className="text-violet-400 transition-transform duration-300 group-hover:scale-105"/>
                            </div>
                            <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-400"></span>
                        </div>
                        <div className = "text-left">
                            <h4 className = "font-semibold text-white">
                                Rajneesh Kaur
                            </h4>
                            <div className = "mt-1 flex items-center gap-1">
                                <ShieldCheck size={13} className = "text-emerald-400"/>
                            <p className = "text-xs tracking-wide text-slate-400">
                                AI/ML • Cybersecurity
                            </p>
                            </div>
                        </div>
                    </div>
                    <ChevronRight size = {18} className = "text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-300"/>
                </div>
            </button>
        </div>
    );
}

export default SidebarFooter;