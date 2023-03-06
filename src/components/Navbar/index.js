
import React from "react";
import {Link} from 'react-router-dom'
import './style.css'

const Navbar = () => {
    
    // still needs styling
    // if no user logged in
    return(
        <div className="Navbar">
            <Link to="/">Home</Link> 
            
            <div className="notsignedin">
                <Link to="/login">Login</Link>                      
                <Link to="/signup">Sign-up</Link>            
            </div> 
            
                      
        </div>
    
    )
    // else
        return(
            <div className="Navbar">
            <Link to="/">Home</Link> 
            
            <div className="signedin">
                <Link to="/currentplaydates">Dogs in your area</Link>
                <Link to="/createaplaydate">Make a meet up</Link>
                <Link to="/profile">Profile</Link>
            </div>           
        </div>
        )
    
}

export default Navbar