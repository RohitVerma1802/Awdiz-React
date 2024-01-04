import React from "react";
import { useParams } from "react-router-dom";

const UseParams = () => {
  const { age } = useParams();

  return (
    <>
      <div className="useparams-container">
        <h1>UseParams - {age}</h1>
      </div>
    </>
  );
};

export default UseParams;
