import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import './placeholder.css'
import {StoreContext} from "../../context/StoreContext"
const Placeorder = () => {
    const{ getTotalCartamount}=useContext(StoreContext)
  
  return (
    <div>
      <form action="" className="place-order">
        <div className="place-order-left">
<p className="title">Delivery information</p>
<div className="multifield">
  <input type="text" placeholder='first name'/>
  <input type="text" placeholder='last name'/>
</div>
<input type="text" placeholder="email address"   />
<input type="text" placeholder="street"/>
<div className="multifield">
  <input type="text" placeholder='city name'/>
  <input type="text" placeholder='state name'/>
</div>
<div className="multifield">
  <input type="text" placeholder='zipcode'/>
  <input type="text" placeholder='country'/>
  <input type="text" placeholder='phone ' />
  <br />
</div>
<div className='buttons'>
<button>process</button>
</div>
        </div>
        <div className="place-order-right">
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
    <p>${2}</p>
  </div>
  <hr />
  <div className="cart-detail">
    <b>Total</b>
    <b>${ getTotalCartamount()+2}</b>

  </div>
  
</div>
<button >Procced to payment</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Placeorder
