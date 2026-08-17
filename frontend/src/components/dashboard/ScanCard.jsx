import { ScanSearch } from "lucide-react";
import Card from "../common/Card";
import Badge from "../common/Badge";

export default function ScanCard() {
    return (
        <Card className="group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-900/20">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h3 className="text-lg font-semibold text-white">
                        Scan Status
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                        Latest system scan
                    </p>
                </div>

                <div className="rounded-xl border border-sky-500/10 bg-sky-500/10 p-3 text-sky-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-500/20">
                    <ScanSearch size={24} />
                </div>

            </div>

            {/* Scan Details */}
            <div className="space-y-4">

                <div className="flex justify-between">
                    <span className="text-slate-400">
                        Files Scanned
                    </span>

                    <span className="font-semibold text-white">
                        1,248
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400">
                        Threats Found
                    </span>

                    <span className="font-semibold text-red-400">
                        3
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-slate-400">
                        Status
                    </span>

                    <Badge variant="success">
                        Completed
                    </Badge>
                </div>

            </div>

        </Card>
    );
}