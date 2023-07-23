import {useState} from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [theme, setTheme] = useState('light');
  // const [user, setUser] = useState({username: '', email: ''})

  const toggleTheme = event => {
    setTheme(event.target.value);
  };

  return (
    <div className={`App ${theme}`}>
      <h1>React - state and events</h1>
      <Counter />

      
      <select onChange={toggleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>

      <form>
        <input type='email' onChange={(event) => setEmail(event.target.value)} value={email}/>
      </form>
    </div>
  );
}

export default App;
