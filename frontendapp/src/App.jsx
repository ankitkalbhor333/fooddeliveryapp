
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from "./component/navbar/navbar.jsx"
import Footer from "./component/footer/footer.jsx"
import Home from './pages/home/home.jsx'
import Cart from './pages/cart/cart.jsx'
import { useState } from 'react'
import Loginpopup from './component/LoginPopup/Loginpopup.jsx'
import Placeorder from './pages/placeorder/placeorder.jsx'
// import Cart from './pages/cart/cart.jsx';
const  App = () => {

  const[showLogin,setShowLogin]=useState(false)
  return (
   <>
   {showLogin ?<Loginpopup setShowLogin={setShowLogin} />:<></>}
    <div className='app'> 
       <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Placeorder />} />
      </Routes>
     
    <Footer/>
    </div>
    
    </>

  )
}

export default App
