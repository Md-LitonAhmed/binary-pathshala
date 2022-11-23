import React from 'react';
import './Cart.css';

export default function Cart(props) {
    const cart=props.cart;
    console.log(cart);
    let total=0;
    let Fname=[];
    let price=0;
    for(let i=0;i<cart.length;i++){
        total=total+cart[i].price;
        Fname=cart[i].name;
         price=cart[i].price;
    }
  return (
    <div>
       <div className='cart-container'>
        <h2> Cart Summary</h2>
        <h3>Course Name: {Fname}</h3>
        <p><span id='price'>Price:</span> {price}$</p>
        <p>Added Courses: {cart.length}</p>
      <p>Total Price: {total}$</p>
       </div>
    </div>
  )
}
