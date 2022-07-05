import { Link } from "@remix-run/react";

export default function Brand() {
  return (
    <div className="site-brand">
      <Link to="/dashboard">
        <i>S</i>
        <span>shopwerk</span>
      </Link>
    </div>
  );
}