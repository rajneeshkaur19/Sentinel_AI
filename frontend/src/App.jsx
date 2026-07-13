import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import URLScanner from "./pages/URLScanner";
import MalwareScanner from "./pages/MalwareScanner";
import ThreatIntel from "./pages/ThreatIntel";
import AIAssistant from "./pages/AIAssistant";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/url-scanner" element={<URLScanner />} />
          <Route path="/malware-scanner" element={<MalwareScanner />} />
          <Route path="/threat-intel" element={<ThreatIntel />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;