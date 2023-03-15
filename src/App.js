import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import Addpooch from './components/addapooch';
import CreateADate from './components/createadate';
import Currentdates from './components/currentplaydates';
import MyDoggies from './components/mydoggies';
import Dashboard from './components/dashboard';
import Homepage from './components/homepage';
import Localpups from './components/localpups';
import React,{useState,useEffect} from "react";
const { isValidToken} = require("./utils/API.js");




function App() {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(0);
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(()=>{
    const savedToken = localStorage.getItem("token");
    console.log(savedToken)
    if(savedToken){
      isValidToken(savedToken).then(tokenData=>{
        if(tokenData.isValid){
          setToken(savedToken);
          setUserId(tokenData.user.id)
          setIsLoggedIn(true)
        } else {
          localStorage.removeItem("token")
        }
      })
    }
  },[])

  const logout = ()=>{
    setToken('');
    setUserId(0);
    setIsLoggedIn(false);
    localStorage.removeItem("token")
  }
  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} userId={userId} logout={logout}/>
      <Routes>
        <Route path='/' element={<Homepage isLoggedIn={isLoggedIn} token={token} userId={userId}/>}></Route>
        <Route path='/dashboard' element={<Dashboard isLoggedIn={isLoggedIn} token={token} userId={userId} user={user} setUser={setUser}/>}></Route>
        <Route path='/createaplaydate' element={<CreateADate isLoggedIn={isLoggedIn} token={token} userId={userId} setUser={setUser}/>}></Route>
        <Route path='/currentplaydates' element={<Currentdates />}></Route>
        <Route path='/addapooch' element={<Addpooch isLoggedIn={isLoggedIn} token={token} userId={userId}/>}></Route>
        {/* <Route path='/localpups' element={<Localpups />}></Route> */}
        <Route path='/mydoggies' element={<MyDoggies isLoggedIn={isLoggedIn} token={token} userId={userId}/>}></Route>
        <Route path='/profile/:id' element={<Profile token={token} userId={userId}/>}></Route>
        <Route path='/login' element={<Login setToken={setToken} setUserId={setUserId} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>}></Route>
        <Route path='/signup' element={<Signup setToken={setToken} setUserId={setUserId} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>}></Route>
        <Route path='*' element={<Homepage />}></Route>
      </Routes>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,500;1,400&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/luxonauta/luxa@1.1/dist/expanded/luxa.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/luxonauta/luxa@1.1/dist/compressed/luxa.css" />
      <Footer />

    </BrowserRouter>
  );
}

export default App;
