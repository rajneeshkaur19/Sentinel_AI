import { Lightbulb, ArrowRight } from "lucide-react";
import Card from "../common/Card";

function RecommendationCard() {
    return (
        <Card className="group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-xl hover:shadow-yellow-900/20">

            {/* Header */}
            <div className="mb-5 flex items-center justify-between">

                <div>
                    <h2 className="text-lg font-semibold text-white">
                        AI Recommendations
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Security improvements
                    </p>
                </div>

                <div className="rounded-xl border border-yellow-500/10 bg-yellow-500/10 p-3 text-yellow-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-500/20">
                    <Lightbulb size={24} />
                </div>

            </div>

            {/* Recommendations */}
            <ul className="mb-6 space-y-3 text-sm">

                <li className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-xs text-emerald-400">
                        ✓
                    </span>
                    Update antivirus definitions.
                </li>

                <li className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-xs text-emerald-400">
                        ✓
                    </span>
                    Enable Windows Firewall.
                </li>

                <li className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-xs text-emerald-400">
                        ✓
                    </span>
                    Scan your Downloads folder.
                </li>

            </ul>

            {/* Button */}
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-yellow-500/20 bg-yellow-500/10 py-2.5 text-sm font-medium text-yellow-300 transition-all duration-300 hover:bg-yellow-500/20 hover:text-yellow-200">

                View Full Recommendations

                <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />

            </button>

        </Card>
    );
}

export default RecommendationCard;