import React from 'react'
import './exploremenu.css'
import {menu_list} from '../../assets/asset.js'


const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
<p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas non at quaerat error 
    reiciendis pariatur necessitatibus omnis quos asperiores! Dolor, est iusto. Mollitia eveniet 
    fuga eligendi doloribus ipsum praesentium molestiae?</p>
    <div className="explore-menu-list">

    {menu_list.map((item,index)=>{
     return(
        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)} className="explore-menu-list-item" key={index}>
            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
           <p>{item.menu_name}</p>
            </div>
        
     )
})}

    </div>
    <hr />
    </div>
  )
}

export default Exploremenu
