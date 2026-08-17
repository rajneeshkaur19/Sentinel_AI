import { FileText } from "lucide-react";
import Card from "../common/Card";
import Badge from "../common/Badge";

export default function ReportsCard() {
    return (
        <Card className="group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-900/20">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h3 className="text-lg font-semibold text-white">
                        Reports
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                        Latest report activity
                    </p>
                </div>

                <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/10 p-3 text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500/20">
                    <FileText size={24} />
                </div>

            </div>

            {/* Report Details */}
            <div className="space-y-4">

                <div className="flex justify-between">
                    <span className="text-slate-400">
                        Reports Generated
                    </span>

                    <span className="font-semibold text-white">
                        24
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400">
                        Last Report
                    </span>

                    <span className="font-semibold text-white">
                        Today
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-slate-400">
                        Status
                    </span>

                    <Badge variant="success">
                        Updated
                    </Badge>
                </div>

            </div>

        </Card>
    );
}