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
            threat: "safe",
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

    return(
        <div className = "bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6">
            <h2 className = "text-lg font-semibold mb-4 text-gray-700 dark:text-white">
                Recent Activity
            </h2>
            <div className = "overflow-x-auto">
                <table className = "w-full table-auto text-sm">
                    <thead className = "bg-gray-100 text-gray-700 uppercase-text-xs">
                        <tr className = "border-b text-left">
                            <th className = "pb-2">File</th>
                            <th className = "pb-2">Threat</th>
                            <th className = "pb-2">Status</th>
                            <th className = "pb-2">Time</th>
                        </tr>
                    </thead>
                    <tbody className = "text-black">
                        {activities.map((activity,index) => (
                            <tr key = {index} className = "border-b hover:bg-gray-50 transition last:border-none">
                                <td className = "px-4 py-3"> {activity.file} </td>
                                <td className = "px-4 py-3"> {activity.threat} </td>
                                <td className = "px-4 py-3"> {activity.status} </td>
                                <td className = "px-4 py-3"> {activity.time} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ActivityTable;