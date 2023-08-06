import { useState, useEffect } from "react";
 
function Timer() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    // setCount(count + 1)
  }, [count])
 
 
  return (
    <div className="Timer">
      <h2>Timer</h2>
 
      <h3>{count}</h3>
    </div>
  );
}
 
export default Timer;