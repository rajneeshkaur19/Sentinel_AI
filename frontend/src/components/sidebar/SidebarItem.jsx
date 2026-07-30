import { NavLink } from
"react-router-dom";
function SidebarItem({ 
    icon: Icon,
    title,
    to
}){
    return(
        <NavLink
           to = {to}
           className = {({ isActive }) =>
            `group relative flex items-center gap-4 overflow-hidden rounded-xl px-4 py-3 transition-all duration-300 ${
                isActive 
                ? "border border-violet-500/40 bg-gradient-to-r from-violet-600/20 to-indigo-600/10 text-white shadow-lg shadow-violet-500/20"
                : "text-slate-400 hover:bg-slate-800/70 hover:text-white-300 hover:-translate-x-1"
            
            }`
        }    
    >
        {({ isActive }) => (
            <>
                {/*Active Indicator*/}
                {isActive && (
                    <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]"/>

                )}
                {/*Icon*/}
                {Icon && (<Icon size={20}
            className = {`transition-all duration-300 ${
                isActive
                ?"text-violet-300 scale-110"
                :"text-slate-400 group-hover:text-violet-300 group hover:scale-110"
            }`}         
            />
        )}
        {/*title*/}
        <span className = "text-[15px] font-medium tracking-wide">
            {title}
        </span>   
        </>
    )}
    </NavLink>
    );
}

export default SidebarItem;