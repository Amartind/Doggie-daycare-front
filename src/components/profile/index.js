import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { editOwner, getAllOwners } from "../../utils/API";
import MyDoggies from '../mydoggies';
import './style.css'



function Profile(props) {
  const params = useParams();
  const [user, setUser] = useState({});
  const [isMyPage, setIsMyPage] = useState(false);
  const [fullname, setFullName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  
  const fetchUser = () => {
    getAllOwners(params.id).then((data) => {
      setUser(data);
      console.log(data)
      console.log(props.userId);
      if (props.userId == params.id) {
        setIsMyPage(true);
      } else {
        setIsMyPage(false);
      }
    })
  }
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name === 'username') {
      return setUserName(value)
    } else if (name === 'fullname') {
      return setFullName(value)
    } else if (name === 'email') {
      return setEmail(value)
    }else if (name === 'password') {
      return setPassword(value)
    } else if (name === 'phone') {
      return setPhone(value)
    } else if (name === 'address') {
      return setAddress(value)
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    const userinfo ={
      name:fullname||user.name,
      email:email||user.email,
      phone:phone||user.phone,
      password:password||user.password,
      username:username||user.username,
      address:address||user.address
    }
    editOwner(
    userinfo,
    user.id,
    localStorage.getItem("token")
    ).then((data) =>{
      console.log(data)
    })
  };

  useEffect(() => {
    fetchUser();
  }, [props.userId, params.id]);

  return (
    <div className="container">
      <p>Welcome {user.name}</p>
      <form className="signupform grid gap-4 grid-cols-1 grid-rows-6">
        <input
          value={fullname}
          name="fullname"
          onChange={handleInputChange}
          type="text"
          placeholder={user.name}
          className="inputfield"
        />
        <input
          value={username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder={user.username}
          className="inputfield"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder={user.email}
          className="inputfield"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          className="inputfield"
        />
        <input
          value={phone}
          name="phone"
          onChange={handleInputChange}
          type="text"
          placeholder={user.phone}
          className="inputfield"
        />
        <input
          value={address}
          name="address"
          onChange={handleInputChange}
          type="text"
          placeholder={user.address}
          className="inputfield"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );


}

export default Profile;