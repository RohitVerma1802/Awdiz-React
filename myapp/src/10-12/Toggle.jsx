import React, { useState } from "react";

const Toggle = () => {
  const [showText, setShowText] = useState("Jay");
  const toggle = () => {
    showText === "Jay" ? setShowText("Patil") : setShowText("Jay");
  };
  return (
    <>
      {showText}
      <button onClick={toggle}>toggle me</button>
    </>
  );
};

export default Toggle;
