import React, { useState } from "react";
import './style.css'
import { signup } from "../../utils/API";
function Signup() {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    if (name === 'username') {
      return setUserName(value)
    } else if (name === 'password') {
      return setPassword(value)
    } else if (name === 'name') {
      return setName(value)
    } else if (name === 'email') {
      return setEmail(value)
    } else if (name === 'phone') {
      return setPhone(value)
    } else if (name === 'address') {
      return setAddress(value)
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newOwner = {
      name,
      username,
      email,
      password,
      phone,
      address
    };
    signup(newOwner)
      .then(response => {
        if (response.ok) {
          console.log('Owner added to database!');
        } else {
          console.error('Failed to add owner to database!');
        }
      })
      .catch(error => {
        console.error('Failed to send request:', error);
      });
    setName('');
    setUserName('');
    setEmail('');
    setPassword('');
    setPhone('');
    setAddress('');
  };
  return (
    <div className="container">
      <form className="signupform grid gap-4 grid-cols-1 grid-rows-6">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Full name"
          className="inputfield"
        />
        <input
          value={username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="Username"
          className="inputfield"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
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
          placeholder="Phone Number"
          className="inputfield"
        />
        <input
          value={address}
          name="address"
          onChange={handleInputChange}
          type="text"
          placeholder="Address"
          className="inputfield"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}