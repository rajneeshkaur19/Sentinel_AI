import {Quote} from "lucide-react";
function QuoteCard(){
    return(
        <div className = "bg-gradient-to-r from-indigp-600 to-purple-700 rounded-2xl shadow-md p-6 text-white">
            <div className = "flex items-start gap-4">
                <Quote size = {30} className = "opacity-80"/>
                <div>
                    <h2 className = "text-lg font-semibold mb-2">
                        Security Tip of the Day
                    </h2>
                    <p className = "text-indigo-100 italic">
                        "Security is not a product, but a process. Stay vigilant and keep your systems updated."
                    </p>
                </div>
            </div>
        </div>
    );
}

export default QuoteCard;