import { Outlet } from "@remix-run/react";

export default function Pages() {
  return (
    <div id="primary" className="site-content">
      <Outlet />
    </div>
  );
}