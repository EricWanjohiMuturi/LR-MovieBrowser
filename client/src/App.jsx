import './App.css'
import Home from './Components/Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Favorites from './Components/Pages/Favorites'
import { NavbarSimple } from './Components/Includes/Navbar.jsx';

function App() {
  

  return (
    <>
    <Router>
      <NavbarSimple />
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Router>
  
    </>
  )
}

export default App
