// import React from 'react'

import { useState } from "react"

const StudentForm = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[age,setAge]=useState(21)
    const[url,setUrl]=useState("")

    const handleform=(e)=>{
        e.preventDefault();
        console.log(name,email,age,url)
    }
  return (
    <div style={{
        border:"1px solid black",
        padding:"20px",
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        width:"500px"

    }}>
    <form onSubmit={handleform} >
        <label htmlFor="">Name: </label>
        <input type="text " value={name} onChange={(e)=>setName(e.target.value)}/>
        <br />
        <label htmlFor="">Email: </label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <label htmlFor="">Age: </label>
        <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <br />
        <label htmlFor="">ImageUrl: </label>
        <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)}/>
        <br />
        <input type="submit"></input>

    </form>
    </div>
  )
}

export default StudentForm