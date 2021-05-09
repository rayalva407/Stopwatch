import React, { useState, useEffect } from 'react'
import './App.css';
import Stopwatch from './components/Stopwatch'

function App() {

  const [seconds, setSeconds] = useState(0)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const stopwatch = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return() => clearInterval(stopwatch)
  })

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <Stopwatch seconds={seconds} start={start} setSeconds={setSeconds} setStart={setStart} />
    </div>
  );
}

export default App;
