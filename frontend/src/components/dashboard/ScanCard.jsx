import { ScanSearch } from "lucide-react";
import Card from "../common/Card";
import Badge from "../common/Badge";

export default function ScanCard(){
    return(
        <Card>
            <div className = "flex items-center justify-between mb-6">
                <div>
                    <h3 className = "text-lg font-semibold text-white">
                    Scan Status
                    </h3>
                    <p className = "rounded-xl bg-sky-500/10 p-3 text-sky-400">
                    Latest system scan
                    </p>
                </div>
                <div className = "rounded-xl bg-sky-500/10 p-3 text-sky-400">
                    <ScanSearch size={24}/>
                </div>
            </div>
            <div className = "space-y-4">
                <div className="flex justify-between">
                    <span className = "text-slate-400">
                        Files Scanned
                    </span>
                    <span className = "font-semibold text-white">1,248</span>
                </div>
                <div className = "flex justify-between">
                    <span className = "text-slate-400">Threats found</span>
                    <span className = "font-semibold text-red-400">3</span>
                </div>
                <div className = "flex justify-between items-center">
                    <span className = "text-slate-400">Status</span>
                    <Badge variant = "success">completed</Badge>
                </div>
            </div>
        </Card>
    );
}
