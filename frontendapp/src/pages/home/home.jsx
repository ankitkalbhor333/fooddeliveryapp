import React from 'react'
import './home.css'

import { useState } from 'react'
import Header  from '../../component/header/header.jsx'
import  Fooddisplay from '../../component/fooddisplay/Fooddisplay.jsx'
import Exploremenu from '../../component/exploremenu/exploremenu.jsx'
import Appdowload from '../../component/appdowload/appdowload.jsx'
import App from '../../App.jsx'
const Home = () => {

  const[category,setCategory]=useState("all")
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay  category={category}/>
   <Appdowload/>
    </div>
  )
}

export default Home
