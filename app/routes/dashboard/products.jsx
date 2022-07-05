import { Outlet } from "@remix-run/react";

export default function Products() {
  return (
    <div id="primary" className="site-content">
      <Outlet />
    </div>
  );
}