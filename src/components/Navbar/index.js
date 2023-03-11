
import React from "react";
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {

    // still needs styling
    // if no user logged in
    return (
        <div>
            <p className="text-5xl flex justify-center flex-auto">Doggie Daycare</p>
            <div className="Navbar grid grid-rows-1 grid-cols-2 flex-auto">
                <Link to="/" className="navlink flex-auto">Home</Link>

                <div className="notsignedin justify-self-end flex-auto">
                    <Link to="/login" className="p-4 navlink flex-auto">Login</Link>
                    <Link to="/signup" className="p-4 navlink flex-auto">Sign-up</Link>
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