import React from "react";
import {
  Home,
  Users,
  Calendar,
  Settings,
  BarChart3,
  MoreHorizontal,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem.component";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const navItemsTop = [
    { id: "home", icon: Home, label: "בית", to: "/" },
    { id: "users", icon: Users, label: "משתמשים", to: "/users" },
    { id: "calendar", icon: Calendar, label: "לוח שנה", to: "/calendar" },
    { id: "analytics", icon: BarChart3, label: "אנליטיקה", to: "/analytics" },
    { id: "reports", icon: BarChart3, label: "דוחות", to: "/reports" },
  ];

  const navItemsBottom = [
    { id: "settings", icon: Settings, label: "הגדרות", to: "/settings" },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list nav-top">
        {navItemsTop.map((item) => (
          <NavItem key={item.id} {...item} />
        ))}
      </ul>

      <ul className="nav-list nav-bottom">
        {navItemsBottom.map((item) => (
          <NavItem key={item.id} {...item} />
        ))}
        <li className="nav-item">
          <NavLink to="/more" className="nav-button">
            <MoreHorizontal className="nav-icon" />
            <span className="nav-label">עוד</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;