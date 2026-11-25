import { useState } from "react"

const Greet = () => {
  const [title, setTitle] = useState("");

  const handleClick = (name) =>{
    alert("Welcome "+name+"!");
  }  

  const handleChange = (e) =>{
    console.log(e.target.value);
    setTitle(e.target.value);
  }

  return (
    <div>
        <button onClick={()=>handleClick("Hrick")}>Hello, World!</button>
        <input type="text" 
          onChange={handleChange}
        />
        <br />
        <br />
        <h2>Title: {title}</h2>
    </div>
  )
}

export default Greet