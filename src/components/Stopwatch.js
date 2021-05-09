import React from 'react'

function Stopwatch({ seconds, setSeconds, setStart }) {

  return (
    <div>
      <p>{seconds}</p>
      <div>
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch
