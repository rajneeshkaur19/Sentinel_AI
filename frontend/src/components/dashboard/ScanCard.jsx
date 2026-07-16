import { ScanSearch } from "lucide-react";

function ScanCard(){
    return(
        <div className = "bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <div className = "flex items-center justify-between mb-4">
                <h2 className = "text-lg font-semibold text-gray-700 dark:text-white">
                    Scan Status
                </h2>
                <div className = "bg-blue-100 p-3 rounded-full">
                    <ScanSearch className = "text-blue-600" size = {24} />
                </div>
            </div>
            <div className = "space-y-2 text-sm">
                <div className = "flex justify-between">
                    <span className = "text-gray-500"> Files </span>
                    <span className = "font-semibold text-gray-900 dark:text-white">1,248</span>
                </div>
                <div className = "flex justify-between">
                    <span className = "text-gray-500"> Threats Found </span>
                    <span className = "font-semibold text-red-500">3</span>
                </div>
                <div className = "flex justify-between">
                    <span className = "text-gray-500">Status</span>
                    <span className = "font-semibold text-green-600">Completed</span>
                </div>
            </div>
        </div>
    );
}

export default ScanCard;