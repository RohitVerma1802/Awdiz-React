import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DynamicRouting = () => {
  const router = useNavigate();
  const [myAge, setMyAge] = useState(25);

  return (
    <div className="dynamic-container">
      <h1>DynamicRouting</h1>
      <button onClick={() => router(`/useparams/${myAge}`)}>Routing</button>
    </div>
  );
};

export default DynamicRouting;
