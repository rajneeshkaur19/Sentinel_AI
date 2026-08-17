import HeroSection from "../components/dashboard/HeroSection";
import ThreatCard from "../components/dashboard/ThreatCard";
import ScanCard from "../components/dashboard/ScanCard";
import ReportsCard from "../components/dashboard/ReportsCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import ActivityTable from "../components/dashboard/ActivityTable";
import ThreatChart from "../components/dashboard/ThreatChart";
import QuoteCard from "../components/dashboard/QuoteCard";
import SafeFilesCard from "../components/dashboard/SafeFilesCard";
import UploadCard from"../components/upload/UploadCard";
import Button from"../components/common/Button";
function Dashboard() {
  return(
    
    <div className = "space-y-6 p-4 sm:p-6">

      {/* ====================================HERO=======================================*/}

      <HeroSection/>

      {/* ====================================SECURITY OVERVIEW==================================== */}

      <div className = "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <ThreatCard/>
      <ScanCard/>
      <ReportsCard/>
      <RecommendationCard/>
        <div className = "xl:col-span-2">
          <ActivityTable/>
        </div>
      </div>

      {/* ===============================================THREAT ANALYTICS===========================================*/}
      <ThreatChart/>

      {/* =========================================FILE SECURITY===================================*/}
      <div className = "grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SafeFilesCard/>
        <UploadCard/>
      </div>
      {/* ================================== SECURITY INSIGHT =======================*/}
      <QuoteCard/>
    </div>   

  );
}

export default Dashboard;