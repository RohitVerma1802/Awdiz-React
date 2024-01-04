import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/AuthContext";
const Login = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    Name: "",
    Password: "",
  });
  const { state, dispatch } = useContext(MyContext);
  console.log(state?.user, "state?.user");

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.Name && data.Password) {
      try {
        const response = {
          data1: {
            success: true,
            message: "Login Successful",
            user: { name: "Jay", email: "jay@gmail.com" },
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          },
        };
        if (response.data1.success) {
          toast.success(response.data1.message);
          dispatch({ type: "LOGIN", payload: response.data1.user });
          localStorage.setItem(
            "my-token",
            JSON.stringify(response.data1.token)
          );
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data1.error);
      }
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Login From</h1>
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="Name"
            value={data.Name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            name="Password"
            value={data.Password}
            onChange={handleChange}
          />
        </div>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
