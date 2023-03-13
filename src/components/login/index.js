import React, { useState } from "react";
import './style.css'
const { getAllPets, getAllOwners, isValidToken, login, signup, addapet, deletepet, editOwner } = require("../../utils/API.js");


function Login() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    return name === 'username' ? setUserName(value) : setPassword(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const owner = {
      username,
      password,
    };

    login(username)
      .then(response => {
        if (response.ok) {
          console.log('Login successful!');
          // perform any actions needed for successful login
        } else {
          console.error('Login failed!');
          // perform any actions needed for failed login
        }
      })
      .catch(error => {
        console.error('Failed to send request:', error);
      });

    setUserName('');
    setPassword('');
  };


  return (
    <div className="container">
      <form className="loginform grid gap-4 grid-cols-1 grid-rows-2">
        <input
          value={username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};



export default Login