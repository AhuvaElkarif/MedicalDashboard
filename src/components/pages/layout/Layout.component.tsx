import React from "react";
import "./Layout.css";
import Header from "../../header/Header.component";
import NavBar from "../../nav-bar/NavBar.component";

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
