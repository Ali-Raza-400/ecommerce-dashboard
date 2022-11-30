import Body from "./compnents/Body"
import Footer from "./compnents/Footer"
import Navbar from "./compnents/Navbar"
import {
  BrowserRouter,Routes,Route, Outlet
} from "react-router-dom";
import Register from "./compnents/Register";
import PrivateComp from "./compnents/PrivateComp";
import Login from "./compnents/Login";

const App = () => {
 
  return (
    <div> 
      <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/" element={<PrivateComp/>} />
        <Route path="/" element={<h1>All Products</h1>} />
        <Route path="/add" element={<h1>add Products</h1>} />
        <Route path="/update" element={<h1>update Products</h1>} />
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