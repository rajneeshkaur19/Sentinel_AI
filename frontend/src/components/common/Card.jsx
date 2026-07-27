import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function Card({
    children,
    className = "",
    hover = true,
    glass = true,
    padding = "p-6",
    ...props
}){
    return(
        <div className ={twMerge(
            clsx(
                "rounded-2xl border border-white/10",
                "bg-slate-900/70",
                 glass && "backdrop-blur-xl",
                 "shadow-lg",
                 "transition-all duration-300",
                 hover &&
                    "hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]",
                 padding,
                 className,
            )
        )}
        {...props}
        >
            {children}
        </div>
    );
}
