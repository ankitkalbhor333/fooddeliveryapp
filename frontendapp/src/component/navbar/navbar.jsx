import React, { useContext } from 'react'
import './navbar.css'
import { useState } from 'react'
import {assets} from '../../assets/asset.js'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext.jsx'
const Navbar= ({setShowLogin}) => {

  const [menu,setMenu]=useState("")
  const{getTotalCartamount}=useContext(StoreContext)
  return (
   <>
<div className='navbar'>
<Link to="/">       <img src={assets.logo} alt=""  className="logo"/></Link>
      <div className="navbar-menu">
        
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"? "active":""} >home </Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"? "active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"? "active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"? "active":""}>contact-us</a>
      </div>

<div className="navbar-right">
<img src={assets.searchicon} alt="" />
<div className="navbar-search-icon">
 <Link to='/cart'><img src={assets.basket} alt="" /></Link>
<div className={getTotalCartamount()===0?"":"dot"}></div>
</div>
<button onClick={()=>setShowLogin(true)}>sign-in</button>
</div>
</div>
   </>
  )
}

export default Navbar
