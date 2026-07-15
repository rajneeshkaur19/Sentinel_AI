import { ShieldCheck } from "lucide-react";

function HeroSection(){
    return(
        <div className = "bg-gradient-to-r from-indigo-600 to-purple-700 rounded -2xl p-8 text-white shadow-lg">
            <div className = "flex items-center gap-4">
                <div className = "bg-white/20 p-4 rounded-full">
                    <ShieldCheck size = {40}/>
                </div>
                <div>
                    <h1 className = "text-3xl font-bold">
                        Welcome to SentinelAI 🛡️
                    </h1>
                    <p className = "text-sm mt-1 text-indigo-200">
                        Monitor threats, scan files, and secure your system in real time.
                    </p>
                </div>            
            </div>
        </div>
    );
}

export default HeroSection;