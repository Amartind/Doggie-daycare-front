import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import Addpooch from './components/addapooch';
import CreateADate from './components/createadate';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<h1>Dashboard</h1>}></Route>
      <Route path='/createaplaydate' element={<CreateADate/>}></Route>
      <Route path='/currentplaydates' element={<h1>Local dates near you</h1>}></Route>
      <Route path='/addapooch' element={<Addpooch/>}></Route>
      <Route path='/mydoggies' element={<h1>My dogs</h1>}></Route>
      <Route path='/profile' element={<h1><Profile/></h1>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='*' element={<h1>404 Page not found</h1>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
