import React, { useState, useEffect } from 'react'

function Stopwatch() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    const stopwatch = setInterval(() => {
      setCount(count++);
    }, 1000);

    return() => clearInterval(stopwatch)
  })

  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default Stopwatch
