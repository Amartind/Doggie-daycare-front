import React from "react";
import {Link} from 'react-router-dom'
import './style.css'

const Navbar = () => {
    return(
        <div className="Navbar">
            <Link to="/">Home</Link> 
            <div className="">
            <Link to="/login">Login</Link> 
                      
            <Link to="/signup">Sign-up</Link>            
            </div>           
        </div>
    )
}

export default Navbar