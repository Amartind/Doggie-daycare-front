import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<h1>Dashboard</h1>}></Route>
      <Route path='/createaplaydate' element={<h1>Make a date</h1>}></Route>
      <Route path='/currentplaydates' element={<h1>Local dates near you</h1>}></Route>
      <Route path='/addapooch' element={<h1>Add a dog</h1>}></Route>
      <Route path='/mydoggies' element={<h1>My dogs</h1>}></Route>
      <Route path='/profile' element={<h1>Profile</h1>}></Route>
      <Route path='/login' element={<h1>Login</h1>}></Route>
      <Route path='/signup' element={<h1>Signup</h1>}></Route>
      <Route path='*' element={<h1>404 Page not found</h1>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
