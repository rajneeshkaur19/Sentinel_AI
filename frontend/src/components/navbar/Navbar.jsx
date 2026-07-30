import {
    Bell,
    Search,
    Settings,
    UserCircle2,
} from "lucide-react";
function Navbar(){
    return(
        <header className = "sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
            <div className = "flex items-center justify-between px-8 py-4">
                {/*Left*/}
                <div>
                    <h1 className = "text-2xl font-bold text-white">
                        Dashboard
                    </h1>
                    <p className = "text-sm text-slate-400">
                        Welcome back, Rajneesh
                    </p>
                </div>
                {/*Center*/}
                <div className = "hidden md:flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 w-[380px]">
                    <Search size = {18} className = "text-slate-400"/>
                    <input type = "text" placeholder = "Search threats..." className = "w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline:none"/>
                </div>
                {/*Right*/}
                <div className = "flex items-center gap-4">
                    <button className = "rounded-xl bg-slate-900 p-3 transition hover:bg-slate-800">
                        <Bell size={18} className = "text-white"/>
                    </button>
                    <button className = "rounded-xl bg-slate-900 p-3 transition hover:bg-slate-800">
                        <Settings size={18} className = "text-white"/>
                    </button>
                    <button className = "flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-2 transition hover:bg-slate-800">
                        <UserCircle2 size={34} className = "text-violet-400"/>
                        <div className = "text-left">
                            <p className = "text-sm font-semibold text-white">
                                Rajneesh Kaur
                            </p>
                            <p className = "text-xs text-slate-400">
                                AI/ML • Cybersecurity
                            </p>
                        </div>

                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
