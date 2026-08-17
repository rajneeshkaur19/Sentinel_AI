import { ShieldCheck } from "lucide-react";

function HeroSection() {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 px-6 py-10 text-white shadow-2xl shadow-violet-900/30 sm:px-8 lg:px-10 lg:py-12">

            {/* Background Glow */}
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />

            {/* Background Particles */}
            <div className="absolute left-1/2 top-10 h-2 w-2 animate-ping rounded-full bg-white/60" />
            <div className="absolute bottom-12 right-16 h-3 w-3 rounded-full bg-cyan-300/70 animate-pulse" />
            <div className="absolute right-1/3 top-24 h-2 w-2 rounded-full bg-pink-300/70 animate-pulse" />

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

                {/* =========================
                    SHIELD VISUAL
                ========================== */}
                <div className="relative flex min-h-[280px] items-center justify-center lg:min-h-[320px]">

                    {/* Main Glow */}
                    <div className="absolute h-72 w-72 rounded-full bg-violet-500/20 blur-3xl animate-pulse" />

                    {/* Outer Rotating Ring */}
                    <div className="absolute h-64 w-64 rounded-full border border-white/10 animate-spin-slow" />

                    {/* Inner Reverse Ring */}
                    <div className="absolute h-48 w-48 rounded-full border border-cyan-200/10 animate-spin-reverse" />

                    {/* Orbiting Particles */}
                    <div className="absolute h-3 w-3 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50 animate-orbit" />

                    <div className="absolute h-2 w-2 rounded-full bg-pink-300 shadow-lg shadow-pink-300/50 animate-orbit-reverse" />

                    {/* Shield */}
                    <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl shadow-cyan-300/20 backdrop-blur-xl transition-transform duration-500 hover:scale-110">

                        <ShieldCheck
                            size={64}
                            strokeWidth={1.8}
                            className="text-white drop-shadow-xl"
                        />

                    </div>

                    {/* Scanning Line */}
                    <div className="absolute h-px w-40 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent animate-scan" />

                </div>

                {/* =========================
                    HERO CONTENT
                ========================== */}
                <div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        AI-Powered Cyber Defense 🛡️
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-indigo-100 sm:text-base">
                        Monitor threats, scan suspicious files, analyze URLs and
                        protect your digital environment with intelligent,
                        real-time security.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">

                        <button className="rounded-2xl bg-white px-7 py-3.5 font-semibold text-violet-700 shadow-lg shadow-white/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/30">
                            🛡️ Start Scan
                        </button>

                        <button className="rounded-2xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-xl">
                            🗒️ View Reports
                        </button>

                    </div>

                    {/* Live Security Status */}
                    <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-6">

                        <div className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2">

                            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

                            <span className="text-sm font-medium text-emerald-200">
                                System Protected
                            </span>

                        </div>

                        <div className="text-sm text-indigo-100">
                            Threat Level:
                            <span className="ml-2 font-bold text-emerald-300">
                                LOW
                            </span>
                        </div>

                        <div className="text-sm text-indigo-100">
                            Last Scan:
                            <span className="ml-2 font-semibold text-white">
                                5 min ago
                            </span>
                        </div>

                    </div>

                    {/* Quick Stats */}
                    <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">

                        {/* Threats Blocked */}
                        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-xl hover:shadow-violet-500/20">

                            <p className="text-2xl font-bold">
                                128
                            </p>

                            <p className="mt-1 text-sm text-indigo-200">
                                Threats Blocked
                            </p>

                        </div>

                        {/* Files Scanned */}
                        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-xl hover:shadow-violet-500/20">

                            <p className="text-2xl font-bold">
                                2,548
                            </p>

                            <p className="mt-1 text-sm text-indigo-200">
                                Files Scanned
                            </p>

                        </div>

                        {/* Reports Generated */}
                        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-xl hover:shadow-violet-500/20">

                            <p className="text-2xl font-bold">
                                36
                            </p>

                            <p className="mt-1 text-sm text-indigo-200">
                                Reports Generated
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default HeroSection;