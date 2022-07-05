import { Outlet } from "@remix-run/react";
import Topbar from "~/components/dashboard/Topbar";
import Header from "~/components/dashboard/Header";
import Footer from "~/components/dashboard/Footer";

export const meta = () => ({
  title: 'Dashboard',
});

export default function Dashboard() {
  return (
    <div id="page" className="site dashboard">
      <Topbar />
      <Header />
      <div id="main" className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}