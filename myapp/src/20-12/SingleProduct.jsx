import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./../Styles/Product.css";
const SingleProduct = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  console.log("id-----------", id);
  const getSingleProductData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res.data);
      setSingleData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleProductData();
    }
  }, [id]);
  return (
    <>
      <h1>Single Product</h1>
      <div className="product-card">
        <div>
          <img
            style={{ height: "300px", width: "300px" }}
            src={singleData.image}
            alt=""
          />
          <p>{singleData.title}</p>
          <p>{singleData.price}</p>
          {singleData.rating && <p>{singleData.rating.rate}</p>}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
