import React, { useState } from "react";

function ChildrenComponent({ ChangeValue }) {
  return <input onChange={ChangeValue} />;
}

const ChildrenToParent = () => {
  const [myValue, setMyValue] = useState("");
  function ChangeValue(e) {
    setMyValue(e.target.value);
  }

  return (
    <div>
      <h1>Typed value : {myValue}</h1>
      <ChildrenComponent ChangeValue={ChangeValue} />
      {/* products, pricing, offers  */}
    </div>
  );
};

export default ChildrenToParent;
