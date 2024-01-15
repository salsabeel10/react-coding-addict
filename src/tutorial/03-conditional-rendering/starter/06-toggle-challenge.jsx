import { useState } from "react";

const ToggleChallenge = () => {
  
  const [value, setvalue] = useState(false);
 
  
  return (
    <div>
      <button className="btn" onClick={()=>setvalue(!value)}>Click Me</button>
      {value?<p style={{background:'red',margin:'10px'}}>Hello</p>:<p></p>}
      
    </div>
  );
};

export default ToggleChallenge;
