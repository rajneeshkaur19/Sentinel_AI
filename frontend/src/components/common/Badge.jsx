import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const variants = {
    success: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    danger: "bg-red-500/20 text-red-400 border border-red-500/30",
    warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    info: "bg-sky-500/20 text-sky-400 border border-sky-500/30",
    default: "bg-slate-700 text-slates-200 border border-slate-600",
};

export default function Badge({
    children,
    variant = "default",
    className = "",
}){
    return(
        <span
            className = {twMerge(
                clsx(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                    variants[variant],
                    className
                )
            )}
        >
            {children}
        </span>
    );
}