import React from "react";
import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import "./NavBar.css";

interface NavItemProps {
  id: string;
  icon: LucideIcon;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ id, icon: IconComponent, to }) => {
  return (
    <li key={id} className="nav-item">
      <NavLink
        to={to}
        className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
      >
        <IconComponent className="nav-icon" />
      </NavLink>
    </li>
  );
};

export default NavItem;
