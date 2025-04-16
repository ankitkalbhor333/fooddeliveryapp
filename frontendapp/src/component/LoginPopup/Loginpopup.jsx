
import React, { useState } from "react";
import { assets } from "../../assets/asset.js";
import "./loginpopup.css";

const Loginpopup = ({ setShowLogin }) => {
    const [currState, setcurrState] = useState("Login");

    return (
        <div className="login-popup">
            <form className="loginpopupcontainer">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img 
                        onClick={() => setShowLogin(false)} 
                        src={assets.crossicon} 
                        alt="Close popup"
                    />
                </div>

              
                    <div className="login-popup-inputs">
{        currState==="Login"?<></> :               <input type="text" placeholder="Full Name" required />}
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        
                    </div>
                    <button type="submit">{currState==="Sign-up"?"Create account":"Login"}</button>
             <div className="login-popup-condition" >
                <input type="checkbox" required/>
                <p>by contininig , i agree to the term and condition</p>

             </div>
             {currState==="Login" ?   <p>Create a new acocunt ? <span onClick={()=>setcurrState("Sign-up")}>Click here</span></p> 
             : <p>Already have a account ? <span  onClick={()=>setcurrState("Login")}>Login here</span></p>}
          
 

               
            </form>
        </div>
    );
};

export default Loginpopup;