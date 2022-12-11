const express = require("express");
const products = require("./models/Product");
const User = require("./models/User");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
require("./conn");
// connection

// for displaying the data in response
// Routes
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");

    if (user) {
      res.send(user);
    } else {
      res.send({ result: "User not found" });
    }
  } else {
    res.send({ result: "User not found" });
  }
});

// add product
app.post("/add-product", async (req, res) => {
  const product = new products(req.body);
  const result = await product.save();
  res.send(result);
});

// get data
app.get("/products", async (req, res) => {
  let product = await products.find();
  if (product.length > 0) {
    res.send(product);
  } else {
    res.send({ Result: "No Product Found" });
  }
});
// delete api
app.delete("/product/:id", async (req, res) => {
  // res.send(req.params.id)
  const result = await products.deleteOne({ _id: req.params.id });
  res.send(result);
});
// get Single Product method
app.get("/product/:id", async (req, res) => {
  const result = await products.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Record Found" });
  }
});
// update method
app.put("/product/:id", async (req, res) => {
  const result = await products.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

// search Api get request
app.get("/search/:key",async(req,res)=>{
  const result =await products.find({
    "$or":[
      {name:{$regex:req.params.key}},
      {price:{$regex:req.params.key}},
      {category:{$regex:req.params.key}},
      {company:{$regex:req.params.key}}
    ]
  })
 res.send(result) 
})

app.listen(5000, () => {
  console.log("lishening at port 5000");
});
