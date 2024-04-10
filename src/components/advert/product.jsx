import React from 'react'
import product from "../../assets/banner6.png"
import ButtonLink from './../ButtonLink/ButtonLink';


export default function ProductAdd() {
  return (
    <> <img style={{width: "70%",
      display:" block" , 
      margin: "100px auto"}} className='product' src={product} alt="" />
    </>
   
  )
}
