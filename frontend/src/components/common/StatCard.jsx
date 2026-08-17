import Card from "./Card";

export default function StatCard({
    title,
    value,
    change,
    icon,
    children,
    className = "",
}) {
    return(
        <Card className = {`group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-900/20 $ {className}`}>
            <div className = "flex items-start justify-between">
                <div>
                    <p className = "text-sm font-medium text-slate-400">
                        {title}
                    </p>
                    <h3 className = "mt-2 text-3xl font-bold text-white">
                        {value}
                    </h3>
                    {change && (
                        <p className = "mt-2 text-sm font-medium text-violet-400">
                            {change}
                        </p>
                    )}
                </div>
                {icon && (
                    <div className = "rounded-xl border border-violet-500/10 bg-violet-500/10 p-3 text-violet-400 transition-all duration-300 group-hover:bg-violet-500/20 group-hover:tet-violet-300">
                        {icon}
                    </div>
                )}
            </div>
            {children}
        </Card>
    );
}