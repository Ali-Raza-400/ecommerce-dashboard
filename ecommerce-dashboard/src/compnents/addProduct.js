import axios from "axios";
import React from "react";
import { useState } from "react";

const AddProduct = () => {
  const [name, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async () => {
    if (!name || !price || !category || !company ) {
      //if !productname mean name Empty =true
      console.log("this field is req");
      setError(true);
      return false;
    }
    // console.log("===>", !name);
    const userId = JSON.parse(localStorage.getItem("users")).data._id;
    console.log(userId);
    await axios
      .post("http://localhost:5000/add-product", {
        name,
        price,
        category,
        company,
        userId,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err, "error part run");
      });
  };
  return (
    <div>
      <h1>Add Product</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Product Name"
        onChange={(e) => setProductName(e.target.value)}
      />
      {error && !name && <span  style={{color:"red"}}>Please Fill the Field </span>}
      <br />
      <input
        type="text"
        value={price}
        placeholder="Enter Product Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      {error && !price &&<span  style={{color:"red"}}>Please Fill the Field </span>}
      <br />
      <input
        type="text"
        value={category}
        placeholder="Enter Product category"
        onChange={(e) => setCategory(e.target.value)}
      />
      {error && !category && <span  style={{color:"red"}}>Please Fill the Field </span>}
      <br />
      <input
        type="text"
        value={company}
        placeholder="Enter Product company"
        onChange={(e) => setCompany(e.target.value)}
      />
      {error && !company &&<span  style={{color:"red"}}>Please Fill the Field </span>}
      <br />
      <button type="button" class="btn btn-success" onClick={handleSubmit}>Add Button</button>
      <br />
    </div>
  );
};

export default AddProduct;
