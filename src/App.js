import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import Addpooch from './components/addapooch';
import CreateADate from './components/createadate';
import Currentdates from './components/currentplaydates';

function App() {
  return (
    <BrowserRouter>
    <Link rel="preconnect" href="https://fonts.googleapis.com"/>
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <Link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet"/>
    <Link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/luxonauta/luxa@1.1/dist/expanded/luxa.css"/>
    <Link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/luxonauta/luxa@1.1/dist/compressed/luxa.css"/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<h1>Dashboard</h1>}></Route>
      <Route path='/createaplaydate' element={<CreateADate/>}></Route>
      <Route path='/currentplaydates' element={<Currentdates/>}></Route>
      <Route path='/addapooch' element={<Addpooch/>}></Route>
      <Route path='/mydoggies' element={<h1>My dogs</h1>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='*' element={<h1>404 Page not found</h1>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
