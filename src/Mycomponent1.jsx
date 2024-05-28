
import React, {useState} from 'react'

function Mycomponent1(props){
     const [quantity,Setquantity]=useState("0");
     const [shipping,Setshipping]=useState("");
     const [comment,setcomment]=useState("write your comment here");

     function handlequantity(event){
        Setquantity(event.target.value);
     }

     function handleshippingchange(event){
        Setshipping(event.target.value);
     }

     function handlecomment(event){
        setcomment(event.target.value);
     }

     //similiary you can use input type name and use onchange
     //onChange
     
     return(
        <>
         <input type="number" value={quantity} onChange={handlequantity} />
         <p>Quantity: {quantity}</p>
          <label htmlFor="">
            <input type="radio" value="Pick Up" checked={shipping==="Pick Up"} onChange={handleshippingchange}/>
            Pick Up
          </label>
          <label htmlFor="">
            <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleshippingchange}/>
            Delivery
          </label>
          <p>Shipping: {shipping}</p>
          <textarea value={comment} onChange={handlecomment} cols="30" rows="10"></textarea>
          <p>Comment: {comment}</p>
         </>
     );
}

export default Mycomponent1