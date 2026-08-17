import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { day: "Mon", threats: 3 },
    { day: "Tue", threats: 7 },
    { day: "Wed", threats: 5 },
    { day: "Thu", threats: 8 },
    { day: "Fri", threats: 4 },
    { day: "Sat", threats: 6 },
    { day: "Sun", threats: 2 },
];

function ThreatChart() {
    return (
        <div className="rounded-2xl border border-violet-500/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl">

            {/* Header */}
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <div>
                    <h2 className="text-lg font-semibold text-white">
                        Weekly Threat Trend
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Threat activity detected over the last 7 days
                    </p>
                </div>

                {/* Summary */}
                <div className="rounded-xl border border-violet-500/10 bg-violet-500/10 px-4 py-2">
                    <p className="text-xs text-slate-400">
                        Total Threats
                    </p>

                    <p className="text-lg font-bold text-violet-300">
                        35
                    </p>
                </div>

            </div>

            {/* Chart */}
            <div className="h-72 w-full">

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 10,
                            left: -20,
                            bottom: 5,
                        }}
                    >

                        <CartesianGrid
                            stroke="#334155"
                            strokeDasharray="3 3"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                            allowDecimals={false}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#0f172a",
                                border: "1px solid rgba(139, 92, 246, 0.3)",
                                borderRadius: "12px",
                                color: "#fff",
                            }}
                            labelStyle={{
                                color: "#c4b5fd",
                            }}
                            itemStyle={{
                                color: "#a78bfa",
                            }}
                            cursor={{
                                stroke: "#8b5cf6",
                                strokeOpacity: 0.2,
                            }}
                        />

                        <Line
                            type="monotone"
                            dataKey="threats"
                            stroke="#8b5cf6"
                            strokeWidth={3}
                            dot={{
                                r: 4,
                                fill: "#8b5cf6",
                                strokeWidth: 0,
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default ThreatChart;