import React from "react";
import './style.css'
import Pup1 from './pup1.png';
import Pup2 from './pup2.png';
import Pup3 from './pup3.png';

export const Dashboard = () => {
  return (
    <div className='mainBody'>
        <h1 className="title">About</h1>
        <div className="flex flexME2">
        {/* <img className="profilePic" src={ProfilePic} alt="Profile Pic" /> */}
        <p className='bold'>Always on a mission to travel!</p>
        </div>
        </div>
  )
}
