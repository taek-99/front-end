import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDebugValue } from 'react';



function Board({ size = 20, teamColor, setTeamColor }) {
  const cell = 40;
  const [rockcolor, setRockcolor] = useState(Array(size * size).fill(0));

  const clickChangeRock = (i) => {
    setRockcolor((prev) => {
      const next = [...prev];
      if (next[i] === 0) {
        next[i] = teamColor;
      }
      return next;
    });
  };

  const turnChange = () => {setTeamColor((prev) => prev * -1)};

  return (
    <div 
    className='board' 
    style={{gridTemplateColumns: `repeat(${size}, ${cell}px)` }}>

      {Array.from({length: size * size}, (_, i) => (
        <button 
          onClick={() => {turnChange(); clickChangeRock(i)}}
          key={i}
          type='button'
          className='square'
          aria-label={`교차점 ${i}`}
        >
          {rockcolor[i] === 1 ? '●' : rockcolor[i] === -1 ? '○' : ""}
        </button>
      ))}
    </div>
  );
}


function App() {
  const [teamColor, setTeamColor] = useState(1);

  return (
    <div>
      <h1>오목 한판 하쉴ㅋ</h1>
      <h3>현재 턴: {teamColor === 1 ? '흑돌(●)' : '백돌(○)'}</h3>
      <Board size={20} teamColor={teamColor} setTeamColor={setTeamColor}/>
    </div>
  );
}

export default App
