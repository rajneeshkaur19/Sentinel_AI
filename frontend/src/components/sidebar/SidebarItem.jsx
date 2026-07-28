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
            `flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 ${
                isActive 
                ? "bg-violet-600/20 border border-violet-500/40 text-white shadow-lg shadow-violet-500/20"
                : "text-slate-300 hover:bg-slate-800/70 hover:text-violet-300 hover:-translate-x-1"
            
            }`
        }    
    >
        {Icon && <Icon size={18}/>}
        <span className = "font-medium">
            {title}
        </span>
        </NavLink>

    );
}

export default SidebarItem;