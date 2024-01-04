import React, { useState, useEffect } from "react";
import axios from "axios";
import { SpinnerDotted } from "spinners-react";
import { useNavigate } from "react-router-dom";
const AllProducts = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    setTimeout(async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  };

  const pageNavigate = (id) => {
    navigate(`/single-product/${id}`);
    console.log(id);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {data?.length ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {data.map(({ id, title, price, image }) => (
              <div
                onClick={() => pageNavigate(id)}
                style={{
                  height: "500px",
                  width: "23%",
                  border: "2px solid black",
                  marginBottom: "30px",
                  cursor: "pointer",
                }}
              >
                <img style={{ height: "400px", margin: "auto" }} src={image} />
                <h1>{title}</h1>
                <h3>${price}/-</h3>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <SpinnerDotted />
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
