import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
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



function App() {
  // const user = await fetch(localhost/api/users/5)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/createaplaydate' element={<CreateADate />}></Route>
        <Route path='/currentplaydates' element={<Currentdates />}></Route>
        <Route path='/addapooch' element={<Addpooch />}></Route>
        <Route path='/localpups' element={<Localpups />}></Route>
        <Route path='/mydoggies' element={<MyDoggies />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<Homepage />}></Route>
      </Routes>

      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <Link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet" />
      <Link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/luxonauta/luxa@1.1/dist/expanded/luxa.css" />
      <Link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/luxonauta/luxa@1.1/dist/compressed/luxa.css" />
      <Footer />

    </BrowserRouter>
  );
}

export default App;
