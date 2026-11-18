import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex",
      border:"1px solid black",
     justifyContent:"end",
      backgroundColor:"lightblue",
       padding:"10px"}}>
        <p>Home</p>
        <p>Product</p>
        <p>Cart</p>
        <p>Profile</p>
    </div>
  )
}

export default Navbar