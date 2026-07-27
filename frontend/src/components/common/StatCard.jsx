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
        <Card className = {`p-6 $ {className}`}>
            <div className = "flex items-star justify-between">
                <div>
                    <p className = "text-sm text-slate-400">
                        {title}
                    </p>
                    <h3 className = "mt-2 text-3xl font-bold text-white">
                        {value}
                    </h3>
                    {change && (
                        <p className = "mt-2 text-sm text-violet-400">
                            {change}
                        </p>
                    )}
                </div>
                {icon && (
                    <div className = "rounded-xl bg-violet-500/10 p-3 text-violet-400">
                        {icon}
                    </div>
                )}
            </div>
            {children}
        </Card>
    );
}