
import React from "react";
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {

    // still needs styling
    // if no user logged in
    // if(nousersignedin)
    // {
        return (
    
             <div className="Navbar">
                 <p className="text-5xl flex justify-center flex-auto">Doggie Daycare</p>
                 <div className="Navbar grid grid-rows-1 grid-cols-2 flex-auto">
                     <Link to="/" className="navlink flex-auto">Home</Link>
     
                     <div className="signedin justify-self-end flex-auto">
                         <Link to="/currentplaydates" className="p-4 navlink flex-auto">Dogs in your area</Link>
                         <Link to="/createaplaydate" className="p-4 navlink flex-auto">Make a meet up</Link>
                         <div className="dropdown">
                            <button className="dropbtn">Profile</button>
                            <div className="dropdown-content ">
                              <div className="grid grid-rows-4">
                              <Link to="/profile" className="dropdownlink p-4 navlink flex-auto">Edit Profile</Link>
                              <Link to="/mydoggies" className="dropdownlink p-4 navlink flex-auto">My Dogs</Link>
                              <Link to="/addapooch" className="dropdownlink p-4 navlink flex-auto">Add Dog</Link>
                              <Link to="/" className="dropdownlink p-4 navlink flex-auto">Logout</Link>

                              </div>
                            </div>
                         </div>
                     </div>
                     
                 </div>
             </div>
        )
            
        }
//      else {
//          return (
//          )

//      }

// }
//             <div>
//                 <p className="text-5xl flex justify-center flex-auto">Doggie Daycare</p>
//                 <div className="Navbar grid grid-rows-1 grid-cols-2 flex-auto">
//                     <Link to="/" className="navlink flex-auto">Home</Link>
    
//                     <div className="notsignedin justify-self-end flex-auto">
//                         <Link to="/login" className="p-4 navlink flex-auto">Login</Link>
//                         <Link to="/signup" className="p-4 navlink flex-auto">Sign-up</Link>
//                     </div>
    
    
//                 </div>
    
//             </div>

export default Navbar