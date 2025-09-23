import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Hello () {
  useEffect(() => {
    console.log("gigi")
  }, [])
  return <h1>Hello</h1>
}


function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      <h1>DAY 10</h1>
      {showing ? <Hello/>: null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}



export default App
