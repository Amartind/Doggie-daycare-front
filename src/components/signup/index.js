import React, { useState } from "react";
import './style.css'

 
function Signup() {
  const [fullname, setFullName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name === 'username'){
        return setUserName(value)
    } else if (name === 'password'){
        return setPassword(value)
    } else if (name === 'fullname'){
        return setFullName(value)
    } else if (name === 'email'){
        return setEmail(value)
    } else if (name === 'phonenumber'){
        return setPhoneNumber(value)
    } else if (name === 'address'){
        return setAddress(value)
    } 
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    setUserName('');
    setPassword('');
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
  };

  return (
    <div className="container">
      <form className="signupform grid gap-4 grid-cols-1 grid-rows-6">
        <input
            value={fullname}
            name="fullname"
            onChange={handleInputChange}
            type="text"
            placeholder="Full name"
        />
        <input
            value={username}
            name="username"
            onChange={handleInputChange}
            type="text"
            placeholder="Username"
        />
        <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email"
        />
        <input
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
        />
        <input
            value={phonenumber}
            name="phonenumber"
            onChange={handleInputChange}
            type="text"
            placeholder="Phonenumber"
        />
        <input
            value={address}
            name="address"
            onChange={handleInputChange}
            type="text"
            placeholder="Address"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}


export default Signup