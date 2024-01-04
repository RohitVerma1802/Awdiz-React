import React from "react";

const PropsMaps = ({ name, myAge, NameChange, myStudents }) => {
  return (
    <>
      <h1>PropsMaps</h1>
      <h2>
        My name is {name} and my age is {myAge}
      </h2>
      <h2>My surname is {name}</h2>
      <button onClick={NameChange}>Click to change me</button>
      {myStudents.map((student) => (
        <ul>
          <li>{student}</li>
        </ul>
      ))}
    </>
  );
};

export default PropsMaps;
