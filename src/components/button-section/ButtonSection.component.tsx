import React from "react";
import Button from "../button/Button.component";
import { StarIcon } from "lucide-react";
import "./ButtonSection.css";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  color: string;
  bgColor: string;
  variant?: "filled" | "outlined";
}

const buttons: ButtonProps[] = [
  {
    text: "פתיחת בקשה חדשה",
    color: "white",
    bgColor: "#007bff",
    variant: "filled",
  },
  {
    text: 'הזמנה ע"י מח` אשפוז',
    color: "black",
    bgColor: "#007bff",
    variant: "outlined",
  },
  {
    text: "מושהה - 15",
    color: "black",
    bgColor: "#007bff",
    variant: "outlined",
    icon: <StarIcon color="red"/>,
  },
  {
    text: "נדרש מידע -120",
    color: "black",
    bgColor: "#007bff",
    variant: "outlined",
    icon: <StarIcon fill="yellow" color="yellow"/>,
  },
  {
    text: "מסתיים - 120",
    color: "black",
    bgColor: "#007bff",
    variant: "outlined",
    icon: <StarIcon color="green" fill="green"/>,
  },
  {
    text: "נדחתה - 3",
    color: "black",
    bgColor: "#007bff",
    variant: "outlined",
    icon: <StarIcon />,
  },
];
const ButtonSection: React.FC = () => {
  return (
    <div className="button-section-container">
      <section className="button-section">
        {buttons.slice(0, 2).map((btn, idx) => (
          <Button key={idx} {...btn} />
        ))}
      </section>
      <section className="button-section">
        {buttons.slice(2).map((btn, idx) => (
          <Button key={idx} {...btn} />
        ))}
      </section>
    </div>
  );
};

export default ButtonSection;
