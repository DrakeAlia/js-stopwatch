import { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)

useEffect(() => {
  let interval = null;

  if (start) {
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 10)
    }, 10) 
  } else {
    clearInterval(interval)
  }
  return () => clearInterval(interval)
}, [start])

  return (
    <div className="App">
      <h1>StopWatch</h1>
      <h1>
        <spam>{time}</spam>
      </h1>
      <div>
        <button onClick={() => setStart(true)}>Start</button>
      </div>
    </div>
  )
}


export default App;
