import { NavLink } from
"react-router-dom";
function SidebarItem({ title, to}){
    return(
        <NavLink
           to = {to}
           className = {({ isActive }) =>
            `block rounded-lg px-4 py-3 transition-all duration-200 ${
                isActive 
                ? "bg-cyan-500 text-white font-semibold"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            
            }`
        }    
    >
        {title}
        </NavLink>

    );
}

export default SidebarItem;