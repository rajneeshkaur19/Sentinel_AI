import { ShieldAlert } from "lucide-react";

function ThreatCard() {
    return(
        <div className = "bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className = "flex items-center justify-between">

                <div>
                    <p className = "text-gray-500 text-sm">Threats Detected</p>
                    <h2 className = "text-2xl font-bold mt-2 text-gray-800 dark:text-white">12</h2>
                    <p className = "text-red-500 text-sm mt-2">   
                        ↑ 8% from yesterday
                    </p>
                </div>

                <div className = "bg-red-100 p-4 rounded-full">
                    <ShieldAlert className = "text-red-600" size = {30} />
                </div>
            </div>    
        </div>
    );
}

export default ThreatCard;