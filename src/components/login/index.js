import React, { useState } from "react";
import './style.css'

 
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
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

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
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}


export default Login