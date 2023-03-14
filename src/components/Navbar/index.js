import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import API from "../../utils/API";
import './style.css'
import { useParams } from "react-router-dom";
import LOGO from "./LogoDogs.png";
const { isValidToken} = require("../../utils/API.js");

const Navbar = (props) => {
    const params = useParams();
    console.log(params)
    
    
    
    function hello() {
        props.setIsLoggedIn(false);
    }
    return (

        <div >
            <img className="logo" src={LOGO} alt="Doggie Dates" />
            {/* <p className="text-5xl flex justify-center flex-auto">Doggie Daycare</p> */}
            <div className="Navbar grid grid-rows-1 grid-cols-2 flex-auto">
                {/* <h2 className="navlink flex-auto">Welcome {user.name}</h2> */}
                <Link to="/" className="navlink p-2 flex-auto horizontal up">Home</Link>

                {props.isLoggedin ? <div className="signedin justify-self-end flex-auto">
                    <Link to="/localpups" className="p-4 navlink flex-auto">Local Pups</Link>
                    <Link to="/currentplaydates" className="p-4 navlink flex-auto">Local Meetups</Link>
                    <Link to="/createaplaydate" className="p-4 navlink flex-auto">Make a meet up</Link>
                    <div className="dropdown">
                        <button className="dropbtn">Profile</button>
                        <div className="dropdown-content ">
                            <div className="grid grid-rows-4">
                                <Link to={`/profile/${props.userId}`} className="dropdownlink p-4 navlink flex-auto" >Edit Profile</Link>
                                <Link to="/mydoggies" className="dropdownlink p-4 navlink flex-auto">My Dogs</Link>
                                <Link to="/addapooch" className="dropdownlink p-4 navlink flex-auto" >Add Dog</Link>
                                <Link to="/" className="dropdownlink p-4 navlink flex-auto" onClick={hello}>Logout</Link>

                            </div>
                        </div>
                    </div>
                </div>
                    :

                    <div className="notsignedin justify-self-end down flex-auto">
                        <Link to="/login" className="p-4 navlink flex-auto">Login</Link>
                        <Link to="/signup" className="p-4 navlink flex-auto">Sign-up</Link>
                    </div>
                }

            </div>
        </div>
    )

}

export default Navbar