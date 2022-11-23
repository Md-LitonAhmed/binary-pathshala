import React, { useState } from 'react'
import Data from '../../Data/Data.json'
import Course from '../Course/Course'
import './Market.css';
import Cart from '../Cart/Cart';



export default function Courses() {
  let [cart,setCart]=useState([]);

  const handler=(personData)=> {
    const newData=[...cart,personData];
     setCart(newData);
 }

  return (
   <div className='market-container'>
     <div className='course-container'>
     {Data.map((data)=> <Course data={data} key={data.id} handler={handler}></Course> )}
    </div>
    <div>
     <Cart cart={cart}/>
    </div>
   </div>
  )
}
