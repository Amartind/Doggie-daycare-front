import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import Addpooch from './components/addapooch';
import CreateADate from './components/createadate';
import Currentdates from './components/currentplaydates';
import Dashboard from './components/dashboard';
import Hompage from './components/homepage';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Hompage/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/createaplaydate' element={<CreateADate/>}></Route>
      <Route path='/currentplaydates' element={<Currentdates/>}></Route>
      <Route path='/addapooch' element={<Addpooch/>}></Route>
      <Route path='/mydoggies' element={<h1>My dogs</h1>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='*' element={<Hompage/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
