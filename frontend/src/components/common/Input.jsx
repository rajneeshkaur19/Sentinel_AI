import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function Input({
    type = "text",
    placeholder = "",
    value,
    onChange,
    disabled = false,
    className = "",
    ...props
}) {
    return(
        <input 
            type = {type}
            placeholder = {placeholder}
            value = {value}
            onChange = {onChange}
            disabled = {disabled}
            className = {twMerge(
                clsx(
                    "w-full rounded-xl",
                    "bg-slate-900/70",
                    "border border-white/10",
                    "px-4 py-3",
                    "text-white",
                    "placeholder:text-slate-400",
                    "outline-none",
                    "transition-all duration-300",
                    "focus:border-violet-500",
                    "focus:ring-2 focus:ring-violet-500/20",
                    "disabled opacity-50 disabled:cursor-not-allowed",
                    className
                )
            )}
            {...props}
        />
    );
}