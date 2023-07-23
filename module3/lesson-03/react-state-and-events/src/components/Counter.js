import { useState } from 'react';
 
function Counter(props) {
    const [counter, setCounter] = useState(0); 
    const [title] = useState("Counter"); 

    const increaseCounter = () => { // function increaseCounter(){}
        setCounter(counter + 1);
    }

  return (
    <div className="Counter">
      <h2>{title}</h2>
 
      <p>You clicked {props.counter} times</p>
 
      <button onClick={() => props.setCounter(props.counter - 1)}> - </button>
      <button onClick={increaseCounter}> + </button>
      {/* <button onClick={() => setCounter(counter + 1)}> + </button> */}
    </div>
  );
}
 
export default Counter;