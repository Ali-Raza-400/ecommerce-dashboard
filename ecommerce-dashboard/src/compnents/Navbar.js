import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  var auth = localStorage.getItem("users");
  const nevigate = useNavigate();
  const LOGOUT = () => {
    localStorage.clear();
    nevigate("/SignUp");
  };
  return (
    <div>
        <img style={{width:"45px",float:"left",borderRadius:"50%"}} src="https://avatars.githubusercontent.com/u/80849102?v=4" alt="github profile" />
      {auth ? (
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-between",
          }}
        >
          <li>
            <Link to="/">All product</Link>
          </li>
          <li>
            <Link to="/add">Add product</Link>
          </li>
          <li>
            <Link to="/update">update product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={LOGOUT} to="/SignUp">
              Logout {JSON.parse(auth).data.name}
            </Link>
          </li>
          
        </ul>
      ) : (
        <ul style={{ display: "flex", justifyContent: "end", padding: "20px" }}>
          <li style={{ margin: "0 50px" }}>
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Navbar;
