import { NavLink } from 'react-router-dom'
import "./NavBar.css"


const NavBar = function (props) {
  return(

        <div className='formInput'>

            <div className="li">
            <NavLink className={"Nav_Link"}  to="/">Login</NavLink>
            <NavLink className={"Nav_Link"}  to="/register">Register</NavLink>
            </div>
        
        </div>
  ) 
  
};

export default NavBar