import { useEffect, useState } from "react";
import { NavLink } from "@remix-run/react";
import { useMediaQuery } from "@mantine/hooks";
import ArrowDown from "../svg/ArrowDown";

export default function SettingsMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const matches = useMediaQuery('(min-width: 1024px)');
  return (
    <>
      <div className="hide-desktop mobile-tab-menu" onClick={() => setShowMenu(!showMenu)}>
        <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 19H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Show Menu</span>
        <ArrowDown />
      </div>
      <nav className={`site-menu tab-menu hide-mobile ${!matches ? (showMenu ? 'active' : 'default') : 'on-desktop'}`}>
        <ul className="menu">
          <li className="menu-item">
            <NavLink 
              to="."
              className={({ isActive }) =>
                isActive ? 'menu-link active' : 'menu-link'
              }
              end
            >
              Settings
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink 
              to="./currency"
              className={({ isActive }) =>
                isActive ? 'menu-link active' : 'menu-link'
              }
            >
              Currency
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink 
              to="./country"
              className={({ isActive }) =>
                isActive ? 'menu-link active' : 'menu-link'
              }
            >
              Country
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink 
              to="./payment"
              className={({ isActive }) =>
                isActive ? 'menu-link active' : 'menu-link'
              }
            >
              Payment
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink 
              to="./checkout"
              className={({ isActive }) =>
                isActive ? 'menu-link active' : 'menu-link'
              }
            >
              Checkout
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink 
              to="./gdpr"
              className={({ isActive }) =>
                isActive ? 'menu-link active' : 'menu-link'
              }
            >
              GDPR
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}