import { ShieldCheck } from "lucide-react";

function SafeFilesCard() {
    return (
        <div className = "bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            {/*Header*/}
            <div className = "flex items-center justify-between mb-4">
                <div>
                    <h2 className = "text-lg font-semibold text-gray-700 dark:text-white">
                        Safe Files
                    </h2>
                    <p className = "text-sm text-gray-500">
                        Successfully Scanned Files
                    </p>
                </div>
                <div className = "bg-green-100 p-3 rounded-full">
                    <ShieldCheck className = "text-green-600" size = {24}/>
                </div>
            </div>
            {/*Statistics*/}
            <div>
                <h3 className = "text-4xl font-bold text-gray-900 dark:text-white">
                    1,245
                </h3>
                <p className = "text-green-600 text-sm mt-2">
                    ✓ All files are secure
                </p>
            </div>
        </div>
    );
}

export default SafeFilesCard;