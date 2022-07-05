import { NavLink } from "@remix-run/react";
import { menuItems } from "../../utils/menu";

export default function Menu() {
  return (
    <nav className="site-menu">
      <ul className="menu">
        {(menuItems || []).map((item, index) => (
          <li key={index} className="menu-item">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'menu-link active' : 'menu-link'
              }
            >
              {item.icon && (
                <span className={`menu-icon ${item.key}`} dangerouslySetInnerHTML={{__html: item.icon}} />
              )}
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}