import HeroSection from "../components/dashboard/HeroSection";
import ThreatCard from "../components/dashboard/ThreatCard";

function Dashboard() {
  return(
    <div className = "space-y-6 p-6">

      <HeroSection/>
      <ThreatCard/>
    
    </div>
  );
}

export default Dashboard;