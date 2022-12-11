import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const getProductApi = async () => {
    await axios
      .get("http://localhost:5000/products")
      .then((res) => {
        console.log(res.data, "success data");
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.message, "error part Run here");
      });
  };
  useEffect(() => {
    getProductApi();
  }, []);
  const deleteProduct = async(id) => {
    console.log(id);
   await axios.delete(`http://localhost:5000/product/${id}`).then((res)=>{
    if(res){
      getProductApi();
    }
   }).catch((err)=>{
    console.log("No id exist")
   })
  };

  const searchHandle=async(event)=>{
    console.log(event.target.value)
    let key =event.target.value
    {key?(await axios.get(`http://localhost:5000/search/${key}`).then((res)=>{
      console.log(res.data)
      if(res){
        setProducts(res.data)
      }
    })):(getProductApi())}
    
  }
  return (
    <table class="table">
      <input type="text" placeholder="Search Product" onChange={searchHandle}/>
      <thead>
        <tr>
          <th scope="col">S. No</th>
          <th scope="col">Product Name</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
          <th scope="col">Company</th>
          <th scope="col">Operation</th>
        </tr>
      </thead>
      <tbody>
        {products.length>0 ? products.map((product) => {
          return (
            <tr key={product._id}>
              <th scope="row">{product._id}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.company}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={()=>deleteProduct(product._id)}
                  style={{marginRight:"10px"}}
                >
                  Delete
                </button>
                <button  type="button" class="btn btn-info"><Link style={{color:"white"}} to={`/update/${product._id}`}>Update</Link></button>
              </td>
            </tr>
          );
        }):<h1>No Result Found</h1>
      }
      </tbody>
    </table>
  );
};

export default ListProducts;
