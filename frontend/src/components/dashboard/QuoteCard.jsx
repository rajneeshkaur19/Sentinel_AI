import { Quote, ShieldCheck } from "lucide-react";

function QuoteCard() {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 p-6 text-white shadow-xl shadow-violet-900/20 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-900/30">

            {/* Background Glow */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />

            <div className="relative flex items-start gap-4">

                {/* Quote Icon */}
                <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                    <Quote
                        size={26}
                        className="text-violet-200"
                    />
                </div>

                {/* Content */}
                <div className="flex-1">

                    <div className="flex items-center gap-2">

                        <h2 className="text-lg font-semibold">
                            Security Tip of the Day
                        </h2>

                        <ShieldCheck
                            size={18}
                            className="text-emerald-300"
                        />

                    </div>

                    <p className="mt-2 max-w-3xl text-sm italic leading-7 text-indigo-100 sm:text-base">
                        "Security is not a product, but a process.
                        Stay vigilant and keep your systems updated."
                    </p>

                </div>

            </div>

        </div>
    );
}

export default QuoteCard;