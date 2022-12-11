import Body from "./compnents/Body"
import Footer from "./compnents/Footer"
import Navbar from "./compnents/Navbar"
import {
  BrowserRouter,Routes,Route, Outlet
} from "react-router-dom";
import Register from "./compnents/Register";
import PrivateComp from "./compnents/PrivateComp";
import Login from "./compnents/Login";
 import AddProduct from './compnents/addProduct'
import ListProducts from "./compnents/listProducts";
import UpdateProduct from "./compnents/updateProduct";

const App = () => {
 
  return (
    <div> 
      <BrowserRouter>
       <Navbar />
      <Routes>
        <Route  element={<PrivateComp/>} />
        <Route path="/" element={<ListProducts/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/update/:id" element={<UpdateProduct/>} />
        <Route path="/logout" element={<h1>logout Products</h1>} />
        <Route path="/profile" element={<h1>profile Products</h1>} />

        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<Register/>} />
      </Routes>

      <Footer />
  </BrowserRouter>
      </div>
  )
}
export default App