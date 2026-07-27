import { FileText } from "lucide-react";
import Card from "../common/Card";
import Badge from "../common/Badge";

export default function ReportsCard() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Reports
          </h3>
          <p className="text-sm text-slate-400">
            Latest report activity
          </p>
        </div>

        <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400">
          <FileText size={24} />
        </div>
      </div>

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

        <div className="flex justify-between items-center">
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