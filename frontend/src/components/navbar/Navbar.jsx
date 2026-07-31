import {
    Bell,
    Search,
    Settings,
    UserCircle2,
    ChevronDown,
} from "lucide-react";
function Navbar(){

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 17) {
        greeting = "Good Afternoon";
    }

    return(
        <header className = "sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/40">
            <div className = "mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
                {/*Left*/}
                <div>
                    <h1 className = "text-2xl font-bold text-white">
                        Dashboard
                    </h1>
                    <p className = "text-sm text-slate-400 whitespace-nowrap">
                        {greeting}, Rajneesh🤍
                    </p>
                </div>
                {/*Center*/}
                <div className = "hidden md:flex items-center gap-3 w-[420px] rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-3 transition-all duration-300 hover:border-violet-500/40 focus-within:border-violet-500 focus-within:shadow-lg focus-within:shadow-violet-500/20">
                    <Search size = {18} className = "text-slate-400"/>
                    <input type = "text" placeholder = "Search threat, reports, URLs..." className = "flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"/>
                    <kbd className = "hidden lg:flex items-center rounded-md border border-white/10 bg-slate-800 px-2 py-1 text-[11px] text-slate-400">
                        Ctrl K
                    </kbd>
                </div>
                {/*Right*/}
                <div className = "flex items-center gap-5">
                    <button className = "relative rounded-xl border border-white/10 bg-slate-900/60 p-3 transition-all duration-300 hover:-translate-y1 hover:border-violet-500/40 hover:bg-slate-800 hover:shadow-lg hover:shadow-violet-500/10">
                        <Bell size={18} className = "text-white"/>
                        <span className = "absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 animate-pulse"/>
                    </button>
                    {/*Settings*/}
                    <button className = "rounded-xl border border-white/10 bg-slate-900/60 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-slate-800">
                        <Settings size={18} className = "text-white transition-transform duration-300 hover:rotate-90"/>
                    </button>
                    <button className = "group flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:scale-105 transition-transform duration-300 hover:bg-slate-800 hover:shadow-lg hover:shadow-violet-500/10">
                        <UserCircle2 size={38} className = "text-violet-400"/>
                        <div className = "text-left">
                            <p className = "text-sm font-semibold text-white">
                                Rajneesh Kaur
                            </p>
                            <p className = "text-xs text-slate-400">
                                AI/ML • Cybersecurity
                            </p>
                        </div>
                        <chevronDown size = {16} className = "text-slate-400 transition-transform duration-300 group-hover:rotate-180"/>

                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
