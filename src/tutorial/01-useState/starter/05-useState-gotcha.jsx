import { useState } from "react";

const UseStateGotcha = () => {
  
  const [counter, setcounter] = useState(0)
  const btnPress =()=>{
    setTimeout(()=>{
      console.log("btn clicked") 
      setcounter((currentvalue)=>{
        return currentvalue + 1;
      })
      

    },3000)
    
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button className="btn" onClick={()=>btnPress()}>Increase</button>
    </div>
  )
};

export default UseStateGotcha;
