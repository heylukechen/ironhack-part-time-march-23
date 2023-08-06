// import Counter from './components/Counter';
// import Timer from './components/TImer';
import { useState } from 'react';
import Ironbnb from './components/Ironbnb';
import './App.css';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">

    <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
    </button>
      {/* <Counter /> */}
      {/* <Timer /> */}
      {show && <Ironbnb />}
    </div>
  );
}

export default App;
