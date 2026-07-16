import HeroSection from "../components/dashboard/HeroSection";
import ThreatCard from "../components/dashboard/ThreatCard";
import ScanCard from "../components/dashboard/ScanCard";
import ReportsCard from "../components/dashboard/ReportsCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import ActivityTable from "../components/dashboard/ActivityTable";
import ThreatChart from "../components/dashboard/ThreatChart";
import QuoteCard from "../components/dashboard/QuoteCard"
function Dashboard() {
  return(
    <div className = "space-y-6 p-6">

      <HeroSection/>

      <div className = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <ThreatCard/>
      <ScanCard/>
      <ReportsCard/>
      <RecommendationCard/>
      <div className = "xl:col-span-2">
        <ActivityTable/>
      </div>
      </div>
      <ThreatChart/>
      <QuoteCard/>
    </div>
  );
}

export default Dashboard;