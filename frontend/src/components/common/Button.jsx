import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const variants = { 
    primary: "bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40",
    secondary: "bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700",
    outline: "border border-violet-500 text-violet-400 hover:bg-slate-500/10",
    ghost: "text-slate-300 hover:bg-slate-800",
    danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    leftIcon,
    rightIcon,
    className = "",
    ...props
}) {
    return(
        <button disabled={disabled||loading}
                className={twMerge(
                  clsx(
                    "inline-flex items-center gap-2 rounded-xl font-medium transition-all duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-violet-500/50",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "hover:-translate-y-0.5",
                    variants[variant],
                    sizes[size],
                    className
                )
            )}
            {...props}
        >
            {loading?(
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                  Loading...
                </>
              ) : (
              <>
              {leftIcon}
              {children}
              {rightIcon}
              </>
            )}         
        </button>
    );   
}
