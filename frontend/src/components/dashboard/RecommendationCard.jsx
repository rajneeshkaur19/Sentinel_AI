import { Lightbulb, ArrowRight } from "lucide-react";

function RecommendationCard(){
    return(
        <div className = "bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            {/* Header */}
            <div className = "flex items-center justify-between mb-4">
                <h2 className = "text-lg font-semibold text-gray-700 dark:text-white">AI Recommendations</h2>
                <div className = "bg-yellow-100 p-3 rounded-full">
                    <Lightbulb className = "text-yellow-600" size = {24} />
                </div>
            </div>
            {/*Recommendations*/}
            <ul className = "space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <li>✔ Update antivirus definitions.</li>
                <li>✔ Enable Windows Firewall.</li>
                <li>✔ Scan your Downloads folder.</li>
            </ul>

            {/* Button */}
            <button className = "w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl transition">
                View Full Recommendations
                <ArrowRight size = {18} />
            </button>
        </div>
    );
}

export default RecommendationCard;