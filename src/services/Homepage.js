import axios from "axios";
import React, { useState, useEffect } from 'react'

const baseURL = "http://localhost:8088/couponall/getAllCoupons";
// const config = {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//     }
//   };


export default function Homepage() {
    const [coupon, setCoupon] = useState(null);
  
    useEffect(() => {        
        async function getCoupon() {
            const response = await axios.get(baseURL)
            .then((response) => {
                const responseCollected = response;
                setCoupon(responseCollected.data);
                console.log(responseCollected.data)
            })
            .catch( error => console.log( error ) );
          }
          getCoupon();       
    },
    []
    );
    
    if( !coupon ){
        return( "Nothing present" )
    }else{
        return (coupon)
    }   
}
