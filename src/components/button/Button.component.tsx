// Button.tsx
import React from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  color?: string;
  bgColor?: string;
  variant?: "filled" | "outlined";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  color = "#000",
  bgColor = "transparent",
  variant = "filled",
  onClick,
}) => {
  const className = `btn btn-${variant}`;
  const style = {
    color,
    backgroundColor: variant === "filled" ? bgColor : "white",
    borderColor: variant === "outlined" ? bgColor : "transparent",
  };

  return (
    <button className={className} style={style} onClick={onClick}>
      {icon && <span className="btn-icon">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;