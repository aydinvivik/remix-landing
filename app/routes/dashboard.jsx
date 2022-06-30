import { Outlet } from "@remix-run/react";
import Header from "~/components/dashboard/Header";
import Footer from "~/components/dashboard/Footer";

export default function Dashboard() {
  return (
    <div id="page" className="site dashboard">
      <Header />
      <div id="main" className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}