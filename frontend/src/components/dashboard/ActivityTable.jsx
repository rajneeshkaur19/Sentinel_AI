function ActivityTable() {
    const activities = [
        {
            file: "setup.exe",
            threat: "Trojan",
            status: "Blocked",
            time: "2 min ago",
        },
        {
            file: "report.pdf",
            threat: "Safe",
            status: "Verified",
            time: "10 min ago",
        },
        {
            file: "script.py",
            threat: "Suspicious",
            status: "Quarantined",
            time: "15 min ago",
        },
    ];

    return (
        <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h2 className="text-lg font-semibold text-white">
                        Recent Activity
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Latest security events
                    </p>
                </div>

                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    Live
                </span>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="w-full text-left text-sm">

                    <thead>
                        <tr className="border-b border-slate-700/60 text-xs uppercase tracking-wider text-slate-500">

                            <th className="pb-3 font-medium">
                                File
                            </th>

                            <th className="pb-3 font-medium">
                                Threat
                            </th>

                            <th className="pb-3 font-medium">
                                Status
                            </th>

                            <th className="pb-3 text-right font-medium">
                                Time
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {activities.map((activity, index) => (

                            <tr
                                key={index}
                                className="border-b border-slate-800/70 transition-colors duration-200 last:border-none hover:bg-white/[0.03]"
                            >

                                {/* File */}
                                <td className="py-4">
                                    <span className="font-medium text-slate-200">
                                        {activity.file}
                                    </span>
                                </td>

                                {/* Threat */}
                                <td className="py-4">

                                    <span
                                        className={
                                            activity.threat === "Trojan"
                                                ? "rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400"
                                                : activity.threat === "Suspicious"
                                                ? "rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400"
                                                : "rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
                                        }
                                    >
                                        {activity.threat}
                                    </span>

                                </td>

                                {/* Status */}
                                <td className="py-4">

                                    <span
                                        className={
                                            activity.status === "Blocked"
                                                ? "rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400"
                                                : activity.status === "Quarantined"
                                                ? "rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400"
                                                : "rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
                                        }
                                    >
                                        {activity.status}
                                    </span>

                                </td>

                                {/* Time */}
                                <td className="py-4 text-right text-slate-500">
                                    {activity.time}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default ActivityTable;