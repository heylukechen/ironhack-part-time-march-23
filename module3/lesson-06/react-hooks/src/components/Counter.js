import { useState, useEffect } from "react";
 
function Counter() {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(true)

  const animateCounter = () => {
    setTimeout(()=> setShowCounter(false), 2000)
    setTimeout(()=> setShowCounter(true), 4000)
  }

 useEffect(()=>{
    animateCounter()
 },[])

  return (
    <div className="Counter">
      <h2>Counter</h2>
        {showCounter && <div>
        <p>You clicked {count} times</p>
 
      <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button> 
        </div>}
      
    </div>
  );
}
 
export default Counter;