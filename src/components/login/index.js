import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import './style.css'
import { getAllOwners } from "../../utils/API";
import { isValidToken } from "../../utils/API";
import { login } from "../../utils/API";


function Login(props) {
  // Here we set two state variables for firstName and lastName using `useState`
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const savedToken = localStorage.getItem("token");
    
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    return name === 'username' ? setUserName(value) : setPassword(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const owner = {
      username: username,
      password: password
    };
    const fetchUser = () => {
      console.log(props.userId)
      getAllOwners(props.userId).then((data) => {

      })
    };

    login(owner)
      .then((response) => {
        if (response.token) {
          console.log('Login successful!');
          props.setToken(response.token);
          props.setIsLoggedIn(true);
          props.setUserId(response.user.id)
          // fetchUser()
          localStorage.setItem("token", response.token)
          if (savedToken){
            isValidToken(savedToken).then(tokenData=>{
            if(tokenData.isValid){
              props.setIsLoggedIn(true)
            } else {
                localStorage.removeItem("token")
              }
            })
          }
          setUserName('');
          setPassword('');
          getAllOwners(response.user.id).then((data) => {
            props.setUser(data);
            navigate("/dashboard")
          })
          // perform any actions needed for successful login
        } else {
          alert("Invalid Credentials")
          console.error('Login failed!');
          setUserName('');
          setPassword('');
          // perform any actions needed for failed login
        }
      })
      .catch(error => {
        console.error('Failed to send request:', error);
      });
  };


  return (
    <div className="container"><br/>
      <p className='title flex justify-center text-lg'>Welcome back! We're so excited to see you again 🐶</p>
      <form className="loginform smaller grid gap-4 grid-cols-1 grid-rows-2">
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
        <button className="button rounded datebutton loginbtn" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};



export default Login