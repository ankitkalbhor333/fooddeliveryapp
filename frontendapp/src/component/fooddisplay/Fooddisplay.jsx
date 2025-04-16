import React, { useContext } from 'react'
import './fooddisplay.css'
import {StoreContext} from '../../context/storecontext.jsx';
import Fooditem from '../fooditem/Fooditem.jsx'
const Fooddisplay = ( {category} ) => {
    const{food_list}=useContext(StoreContext)
 
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{

          if(category==="all" || category===item.category){
            return <Fooditem key={index} 
          id={item._id}
          name={item.name}
          description={item.description} 
            price={item.price} 
            image={item.image}/>
        }
        })}
          
      </div>
    </div>
  )
}

export default Fooddisplay
