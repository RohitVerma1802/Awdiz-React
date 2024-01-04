import React, { useEffect, useState } from "react";
const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10);

  useEffect(() => {
    alert("i am useEffect");
  }, []);
  return (
    <>
      <div className="useEffect-container">
        <h1>Use Effect</h1>
        <h3>Increment Counter: {counter}</h3>
        <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
        <h3>Decrement Counter: {counter2}</h3>
        <button onClick={() => setCounter2((prev) => prev - 1)}>-</button>
      </div>
    </>
  );
};

export default UseEffect;
