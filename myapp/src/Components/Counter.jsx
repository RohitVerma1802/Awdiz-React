import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  const [isLoggedIn, setisLoggedIn] = useState(true);

  return (
    <>
      <div className="container">
        <div>
          <button onClick={() => setCount(count - 1)}>-</button>
          {count}
          <button onClick={() => setCount(count + 1)}>plus 1</button>
          <button onClick={() => setCount(count + 2)}>plus 2</button>
        </div>
        {isLoggedIn ? (
          <button onClick={() => setisLoggedIn(false)}>Login</button>
        ) : (
          <button onClick={() => setisLoggedIn(true)}>Logout</button>
        )}
      </div>
    </>
  );
};

export default Counter;
