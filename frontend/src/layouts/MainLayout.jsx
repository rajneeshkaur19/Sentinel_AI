import Sidebar from "../components/sidebar/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-slate-950 text-white min-h-screen">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;