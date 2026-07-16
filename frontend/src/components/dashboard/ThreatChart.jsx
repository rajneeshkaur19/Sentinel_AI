import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from"recharts";

const data = [
    { day: "Mon", threats: 3},
    { day: "Tue", threats: 7},
    { day: "Wed", threats: 5},
    { day: "Thu", threats: 8},
    { day: "Fri", threats: 4},
    { day: "Sat", threats: 6},
    { day: "Sun", threats: 2},
];

function ThreatChart(){
    return(
        <div className = "bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6">
            <h2 className = "text-lg font-semibold text-gray-700 dark:text-white mb-4">
                Weekly Threat Trend
            </h2>
            <div className = "h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data= {data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey = "day" />
                        <YAxis/>
                        <Tooltip/>
                        <Line 
                        type = "monotone"
                        dataKey="threats"
                        stroke="#6366F1"
                        strokeWidth ={3}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default ThreatChart;