import React, { useCallback, useState } from "react";
import Todos from "./Todos";
const UseCallback = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  // const AddTodo=()=>{
  //   setTodos((prevTodo)=>[...prevTodo,'New Todo'])
  // }

  const addTodo = useCallback(() => {
    setTodos((prevTodo) => [...prevTodo, "New Todo"]);
  }, [todos]);
  return (
    <>
      I am callback
      <h2>Counter : {counter}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>Click me</button>
      <Todos todo={todos} AddTodo={addTodo} />
    </>
  );
};

export default UseCallback;
