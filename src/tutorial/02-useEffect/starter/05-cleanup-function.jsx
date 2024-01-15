import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setvalue] = useState(false)

  return (
    <div>
      <button className="btn" onClick={()=>setvalue(!value)}>Toggle Button</button>
      {value?<Hello/>:<p></p>}
    </div>
  );
};

const Hello =()=>{
  useEffect(()=>{
    const scrFunc=()=>{
      console.log("window scrolled");
    }
    window.addEventListener('scroll',scrFunc)
  },[])
  return <p>Hello</p>
}

export default CleanupFunction;
