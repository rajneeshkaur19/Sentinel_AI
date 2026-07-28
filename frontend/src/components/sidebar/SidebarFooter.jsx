import {UserCircle2, ChevronRight} from "lucide-react";
function SidebarFooter(){
    return(
        <div className = "mt-auto border-t border-slate-800 pt-5">
            <button className = "w-full rounded-2xl bg-slate-900/70 border border-slate-800 p-4 transition-all duration-300 hover:border-violet-500/40 hover:bg-slate-800/80]hover:shadow-lg hover:shadow-violet-500/10">
                <div className = "flex items-center justify-between">
                    <div className = "flex items-center gap-3">
                        <div className = "rounded-full bg-violet-600/20 p-2">
                            <UserCircle2 size={36} className="text-violet-400"/>
                        </div>
                        <div className = "text-left">
                            <h4 className = "font-semibold text-white">
                                Rajneesh Kaur
                            </h4>
                            <p className = "text-xs text-slate-400">
                                AI/ML • Cybersecurity
                            </p>
                        </div>
                    </div>
                    <ChevronRight size = {18} className = "text-slate-500"/>
                </div>
            </button>
        </div>
    );
}

export default SidebarFooter;