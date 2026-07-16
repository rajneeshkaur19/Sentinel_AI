import { FileText } from "lucide-react";

function ReportsCard(){
    return(
        <div className = "bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            {/* Header */}
            <div className = "flex items-center justify-between mb-4">
                <h2 className = "text-lg font-semibold text-gray-700 dark:text-white"> Reports </h2>
                <div className = "bg-green-100 p-3 rounded-full">
                    <FileText className = "text-green-600" size = {24} />
                </div>
            </div>
            {/*Reports Details*/}
            <div className = "space-y-2 text-sm">
                <div className = "flex justify-between">
                    <span className = "text-gray-500">Reports Generated</span>
                    <span className = "font-semibold text-gray-900 dark:text-white">24</span>
                </div>
                <div className = "flex justify-between">
                    <span className = "text-gray-500">Last Report</span>
                    <span className = "font-semibold text-gray-900 dark:text-white">Today</span>
                </div>
                <div className = "flex justify-between">
                    <span className = "text-gray-500">Status</span>
                    <span className = "font-semibold text-green-600">Updated</span>
                </div>
            </div>
        </div>
    );
}

export default ReportsCard;