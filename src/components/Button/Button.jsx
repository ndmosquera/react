import { useState } from "react";
import "./button.css";

export default function Button({
  styBtn,
  children,
  onClick,
  className = "btn",
}) {
  const [styleBtn, setStyleBtn] = useState(styBtn);


  function handleClick() {
    onClick();
  }

  return (
    <button className={className} onClick={handleClick} style={styleBtn}>
      {children}
    </button>
  );
}
