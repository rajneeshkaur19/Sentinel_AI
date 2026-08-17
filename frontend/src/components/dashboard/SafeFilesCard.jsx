import { ShieldCheck, ArrowUpRight } from "lucide-react";

function SafeFilesCard() {
    return (
        <div className="group rounded-2xl border border-emerald-500/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-emerald-900/20">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h2 className="text-lg font-semibold text-white">
                        Safe Files
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Successfully scanned files
                    </p>
                </div>

                <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/10 p-3 text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500/20">
                    <ShieldCheck size={24} />
                </div>

            </div>

            {/* Statistics */}
            <div className="flex items-end justify-between">

                <div>
                    <h3 className="text-4xl font-bold text-white">
                        1,245
                    </h3>

                    <p className="mt-2 flex items-center gap-2 text-sm font-medium text-emerald-400">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
                            ✓
                        </span>

                        All files are secure
                    </p>
                </div>

                <ArrowUpRight
                    size={20}
                    className="text-emerald-500/50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />

            </div>

        </div>
    );
}

export default SafeFilesCard;