import React, { useState, useEffect } from "react";
import "./Header.css";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("he-IL", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const dateString = now.toLocaleDateString("he-IL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      setCurrentTime(timeString);
      setCurrentDate(dateString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-left">
            <div className="logo-container">
              <div className="logo-icon">לוגו</div>
            </div>
            <div className="user-info">
              <div className="user-name">שם משתמש: פרופ' רוית גבע</div>
              <div className="user-role">תפקיד: רופא</div>
            </div>
          </div>

          <div className="header-right">
            <div className="time-date-display">
              <span className="date-display">{currentDate}</span>
              <span className="border-line"></span>
              <span className="time-display">{currentTime}</span>
            </div>
            <button
              className="logout highlighted"
              onClick={() => handleNavigate("main")}
            >
              יציאה
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
