import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/*Sidebar*/}
      <Sidebar />
      {/*Main content*/}

      <main className="relative flex-1 overflow-y-auto">
        {/*background glow*/}
        <div className = "absolute inset-0 -z-10">
          <div className = "absolute top-20 left-40 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]"/>
          <div className = "absolute bottom-20 right-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]"/>
        </div>
        <Navbar />
            <div className = "p-8">
              {children}
            </div>
      </main>
    </div>
  );
}

export default MainLayout;