import React, { useContext, useState } from 'react'
import './fooditem.css'
import {assets} from '../../assets/asset.js'
import {StoreContext} from '../../context/storecontext.jsx';
const Fooditem = ({id,name,price,description,image}) => {

  // const[itemCount,setItemCount]=useState(0)

  const {carItems,addToCart,removeFromCart}=useContext(StoreContext)










  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img   className='food-item-image' src={image} alt="" />
        { !carItems[id]
        ?  <img   className='add' onClick={()=>addToCart(id)} src={assets.addicon} alt="" />
       : <div className="food-items-counter">
<img  className="red" onClick={()=>removeFromCart(id)} src={assets.addredicon} alt="" />
<p>{carItems[id]}</p>
<img  className="green" onClick={()=>addToCart(id)} src={assets.addgreenicon} alt="" />
        </div>

        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p><img src={assets.rating} alt="Food item" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">{price}$</p>
            <button>add to cart</button>
      </div>
    </div>
  )
}

export default Fooditem
