import React, { useContext } from "react";
import { MyContext } from "../context/AuthContext";
const Home = () => {
  const { state, dispatch } = useContext(MyContext);
  console.log("home state", state);
  return (
    <>
      <h1 style={{ textAlign: "center", border: "1px solid black" }}>
        Home State value:{state.user?.name}
      </h1>
    </>
  );
};

export default Home;
