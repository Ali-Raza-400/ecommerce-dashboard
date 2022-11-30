const mongoose =require("mongoose")
const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://ali:aliali@ecommerce-dashbord.ed2ofmh.mongodb.net/?retryWrites=true&w=majority")
     .then((res)=>console.log("connection successfull")).catch((err)=>console.log("connection Fail"))
 }
 connectDB()