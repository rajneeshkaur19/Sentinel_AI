import { ShieldAlert } from "lucide-react";
import StatCard from "../common/StatCard";

export default function ThreatCard(){
    return(
        <StatCard
        title = "Threats Detected"
        value = "12"
        change="↑ 8% from yesterday"
      icon={<ShieldAlert size={28} />}
    />
    );
}