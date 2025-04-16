import {React,  createContext, use } from 'react';
import { food_list } from '../assets/asset';
import { useState } from 'react';
import { useEffect } from 'react';
 export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const[carItems,setCarItems]=useState({})
    const addToCart=(itemId)=>{
        if(!carItems[itemId]){
            setCarItems({...carItems,[itemId]:1})
    }else{
        setCarItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    }

    const removeFromCart=(itemId)=>{
        setCarItems((prev)=>{
            setCarItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    })}
    // useEffect(()=>{
    //  console.log(carItems)
    // },[carItems])
    const getTotalCartamount=()=>{
        let totalAmount=0;
        for(const item in carItems){
            if(carItems[item]>0){
            let itemInfo=food_list.find((product)=>product._id===item)
            totalAmount+=itemInfo.price*carItems[item]
        }
    }
    return totalAmount

    }
    const contextvalue = {
         food_list,
        carItems,
        setCarItems,
        addToCart,
        removeFromCart,
        getTotalCartamount,
     };
    
    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default   StoreContextProvider ;