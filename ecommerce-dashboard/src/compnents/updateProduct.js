import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
const UpdateProduct = () => {
  const [name, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const params = useParams();
  const nevigate =useNavigate()
  useEffect(() => {
    getProductDetail();
  }, []);
  const getProductDetail = async () => {
    console.log(params.id, "=<===Product id is");
    await axios
      .get(`http://localhost:5000/product/${params.id}`)
      .then((res) => {
        console.log(res.data, "data we get");
        setCategory(res.data.category);
        setCompany(res.data.company);
        setPrice(res.data.price);
        setProductName(res.data.name);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = async () => {
    if (!name || !price || !category || !company) {
      //if !productname mean name Empty =true
      console.log("this field is req");
      setError(true);
      return false;
    }
    console.log("===>", name, price, category, company);
    await axios
      .put(`http://localhost:5000/product/${params.id}`, {
        name,
        price,
        category,
        company,
      })
      .then((res) => {
        console.log("data updated to database", res.data);
       
      })
      .catch((err) => {
        console.log(err.message);
      });
      nevigate("/")
  };
  return (
    <div>
      <h1>Update Product</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Product Name"
        onChange={(e) => setProductName(e.target.value)}
      />
      {error && !name && (
        <span style={{ color: "red" }}>Please Fill the Field </span>
      )}
      <br />
      <input
        type="text"
        value={price}
        placeholder="Enter Product Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      {error && !price && (
        <span style={{ color: "red" }}>Please Fill the Field </span>
      )}
      <br />
      <input
        type="text"
        value={category}
        placeholder="Enter Product category"
        onChange={(e) => setCategory(e.target.value)}
      />
      {error && !category && (
        <span style={{ color: "red" }}>Please Fill the Field </span>
      )}
      <br />
      <input
        type="text"
        value={company}
        placeholder="Enter Product company"
        onChange={(e) => setCompany(e.target.value)}
      />
      {error && !company && (
        <span style={{ color: "red" }}>Please Fill the Field </span>
      )}
      <br />
      <button type="button" class="btn btn-info" onClick={handleSubmit}>
        update Product
      </button>
      <br />
    </div>
  );
};

export default UpdateProduct;
