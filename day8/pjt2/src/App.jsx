import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function App() {
  const [minutes, setMinutes] = useState();
  const [flipped, setFlipped] = useState();
  const onChange = (event) => {
                setMinutes(event.target.value);
            };
  const reset = () => setMinutes(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current)
  }

  return (
  <div>
      <h1>시간 단위 바꾸기</h1>
      <div>
      <label htmlFor="mm"> 분이다. </label>
      <input 
          value={flipped ? minutes*60 : minutes} 
          id="mm" 
          placeholder="분" 
          type="number" 
          onChange = {onChange}
          disabled = {flipped}
          /> 
      </div>
      <div>
      <label htmlFor="hh">시간이다 </label>
      <input 
          value={flipped ? minutes : Math.round(minutes/60)} 
          id="hh" 
          placeholder="시간" 
          type="number" 
          onChange = {onChange}
          disabled = {!flipped}
          />
      </div>
      <button onClick={reset}>리셋한다</button>
      <button onClick={onFlip}>뒤바뀜</button>
  </div>
  );
}

