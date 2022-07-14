import { Outlet } from "@remix-run/react";
import SettingsMenu from "~/components/dashboard/SettingsMenu";

export default function Settings() {
  return (
    <div id="primary" className="site-content">
      <div className="container large">
        <div className="page-header dashboard style-2 with-menu">
          <div className="column left">
            <h1 className="entry-name">Store settings</h1>
            <div className="entry-description">
              <p>You can change the settings of the store from this page.</p>
            </div>
          </div>
          <div className="column full tab-menu-wrapper">
            <SettingsMenu />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}