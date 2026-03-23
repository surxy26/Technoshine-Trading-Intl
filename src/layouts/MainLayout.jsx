import { Outlet } from "react-router-dom";
import Topbar from "../components/layout/Topbar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Topbar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;