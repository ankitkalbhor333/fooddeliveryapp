import React from 'react'
import './cart.css'
import { useContext } from 'react';
import {StoreContext} from "../../context/StoreContext"
import { useNavigate } from 'react-router-dom';
const Cart = () => {
const navigate=useNavigate();
  const{carItems ,food_list,removeFromCart , getTotalCartamount}=useContext(StoreContext)
  return (
    <div className="cart">
      <div className="car-items">
        
<div className="cart-items-title">
  <p>Items</p>
  <p>Title</p>
  <p>Price</p>
  <p>quality</p>
  <p>Total</p>
  <p>Remove</p>
</div>
<br />
<hr />
{food_list.map((item,index)=>{
  if((carItems[item._id] > 0)
  ){
    return(
      <>
      <div className="car-items-titles">
        <img src={item.image} alt="" />
<p>{item.name}</p>
<p>${item.price}</p>
<p>{item.quality}</p>
<p>{carItems[item._id]}</p>
<p>{item.price * carItems[item._id]}</p>
<p onClick={()=>
removeFromCart(item._id)
} className='x'>x</p>
        </div>
        <hr />
        </>
    )
  }
 
      
        })}   
     
      
      <div className="car-bottom">
        <div className="car-total">
          <h2>Cart Total</h2>
<div>
  <div className="cart-detail">
    <p>subtotal</p>
    <p>${getTotalCartamount()}</p>
    </div>
    <hr />
  <div className="cart-detail">
    <p>Delivery fee</p>
    <p>${getTotalCartamount()===0?0:2}</p>
  </div>
  <hr />
  <div className="cart-detail">
    <b>Total</b>
    <b>${getTotalCartamount()===0?0: getTotalCartamount()+2}</b>

  </div>
  
</div>
<button onClick={()=>navigate('/order')}>Procced to check</button>
        </div>


        
        <div className="cart-promocode">
           <div>
             <p> If you have a promo code , enter it here </p>
              <div className="cart-prom-input">
                 <input type="text" placeholder='Enter promo code' />
                  <button>Apply</button>
          </div> 
        </div>
      </div>
      </div>



      </div>
      </div> 
    
  )
}

export default Cart
