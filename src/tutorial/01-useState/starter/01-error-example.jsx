import { useState } from "react";

const ErrorExample = () => {
  let [count, setcount] = useState(0);
  
  const addCount = () => {
    setcount(count+1);
    console.log(count)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={addCount} className="btn">Add value</button>
    </div>
  )
};

export default ErrorExample;
