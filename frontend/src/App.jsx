import { useEffect, useState } from "react";
import { getWelcomeMessage } from "./services/api";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    getWelcomeMessage()
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not connected"));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="rounded-2xl bg-slate-800 p-10 shadow-2xl text-center">
        <h1 className="text-5xl font-bold text-cyan-400">
          🛡️ SentinelAI
        </h1>

        <p className="mt-6 text-xl text-slate-300">
          {message}
        </p>
      </div>
    </div>
  );
}

export default App;