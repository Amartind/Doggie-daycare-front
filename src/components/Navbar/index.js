
import React from "react";
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {

    // still needs styling
    // if no user logged in
    return (
        <div>
            <p className="text-5xl flex justify-center">Doggie Daycare</p>
            <div className="Navbar grid grid-cols-2">
                <Link to="/" className="navlink ">Home</Link>

                <div className="notsignedin justify-self-end ">
                    <Link to="/login" className="p-4 navlink">Login</Link>
                    <Link to="/signup" className="p-4 navlink">Sign-up</Link>
                </div>


            </div>

        </div>

    )
    //  else
    // return (
    //     <div className="Navbar">
    //         <Link to="/">Home</Link>

    //         <div className="signedin">
    //             <Link to="/currentplaydates">Dogs in your area</Link>
    //             <Link to="/createaplaydate">Make a meet up</Link>
    //             <Link to="/profile">Profile</Link>
    //         </div>
    //     </div>
    // )

}

export default Navbar