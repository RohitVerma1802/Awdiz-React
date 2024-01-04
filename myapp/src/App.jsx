import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import NoPageFound from "./Components/NoPageFound";
import Footer from "./Components/Footer";
import Counter from "./Components/Counter";
import UseEffect from "./Components/UseEffect";
import UseParams from "./08-12/UseParams";
import DynamicRouting from "./08-12/DynamicRouting";
import MapObject from "./09-12/MapObject";
import PropsMaps from "./09-12/PropsMaps";
import StyledComponent from "./09-12/StyledComponent";
import Toggle from "./10-12/Toggle";
import RegisterForm from "./10-12/RegisterForm";
import { Toaster } from "react-hot-toast";
import AllProducts from "./16-12/AllProducts";
import ChildrenToParent from "./16-12/ChildrenToParent";
import SingleProduct from "./20-12/SingleProduct";
import UseMemo from "./22-12/UseMemo";
import UseCallback from "./23-12/UseCallback";
import UseReducer from "./24-12/UseReducer";
import ReduxCounter from "./Redux/ReduxCounter";

const App = () => {
  const [myName, setMyName] = useState("Jay");

  const [students, setStudents] = useState([
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1wQLZqIhYASivJhwDTSzAD7sN-N9w-3sCQKc4XrV8wIgFwsB-Sb_RRqKe3akMfSPxiA&usqp=CAU",
      name: "virat",
      marks: "100",
    },

    {
      image:
        "https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/11/klrahulindvsned3-scaled.jpg?size=*:900",
      name: "rahul",
      marks: "100",
    },

    {
      image:
        "https://kmb.kerala.gov.in/ckeditor/samples/fonts/wp-content/uploads/2023/12/when-did-rohit-sharma-hit-his-last-century_67400ddd3.jpg",
      name: "rohit",
      marks: "100",
    },
  ]);

  const ChangeName = () => {
    setMyName("Patil");
  };

  return (
    <>
      <div className="App">
        <Toaster />
        <Router>
          <Navbar />
          <Routes>
            <Route path="*" element={<NoPageFound />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/useEffect" element={<UseEffect />} />
            <Route path="/useparams/:age" element={<UseParams />} />
            <Route path="/dynamic" element={<DynamicRouting />} />
            <Route
              path="/mapobject"
              element={<MapObject myStudentsData={students} />}
            />
            <Route
              path="/props"
              element={
                <PropsMaps
                  name={myName}
                  myAge="25"
                  NameChange={ChangeName}
                  myStudents={["krish", "jay", "shahbaj", "shrusti", "adesh"]}
                />
              }
            />
            <Route path="/styled" element={<StyledComponent />} />
            <Route path="/toggle" element={<Toggle />} />
            <Route path="/registerForm" element={<RegisterForm />} />
            <Route path="/child" element={<ChildrenToParent />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/single-product/:id" element={<SingleProduct />} />
            <Route path="/memo" element={<UseMemo />} />
            <Route path="/callback" element={<UseCallback />} />
            <Route path="/reducer" element={<UseReducer />} />
            <Route path="/redux" element={<ReduxCounter />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
};

export default App;
