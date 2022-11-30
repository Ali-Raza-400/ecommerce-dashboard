import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const Navbar=()=>{
    let auth = localStorage.getItem('users')
    const nevigate=useNavigate();
    const LOGOUT=()=>{
        localStorage.clear()
        nevigate('/SignUp')
    }
    return (
    <div>
        <ul style={{display:"flex", listStyle:"none" , justifyContent:"space-between" }}>
            <li><Link  to="/">All product</Link></li>
            <li><Link  to="/add">Add product</Link></li>
            <li><Link  to="/update">update product</Link></li>
            {/* <li><Link  to="/logout">Logout</Link></li> */}
            <li><Link  to="/profile">Profile</Link></li>
            {/* <li><Link  to="/Login">Login</Link></li> */}
            {/* <li>{auth?<Link onClick={LOGOUT}  to="/SignUp">Logout</Link>:<Link  to="/SignUp">SignUp</Link>}</li> */}
        {
            auth? <li><Link onClick={LOGOUT}  to="/SignUp">Logout</Link></li>:<><li><Link  to="/Login">Login</Link></li><li><Link  to="/SignUp">SignUp</Link></li></>
        }
        </ul>
    </div>
    )
}
export default Navbar