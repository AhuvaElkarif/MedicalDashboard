import React from "react";
import Header from "../header/Header.component";
import NavBar from "../nav-bar/NavBar.component";
import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />
      <main className="main-content">{children}</main>
    </>
  );
};

export default Layout;
