import React, { memo } from "react";
import toast from "react-hot-toast";
const Todos = ({ todo, AddTodo }) => {
  toast.success("i am toast");
  return (
    <div>
      Todos
      <button onClick={AddTodo}>Add Todo</button>
      {todo.map((todo) => (
        <h3>{todo}</h3>
      ))}
    </div>
  );
};

export default memo(Todos);
