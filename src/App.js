import React, { useState, useEffect } from 'react'
import './App.css';
import Stopwatch from './components/Stopwatch'

function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    const stopwatch = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return() => clearInterval(stopwatch)
  })

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <Stopwatch count={count} />
    </div>
  );
}

export default App;
