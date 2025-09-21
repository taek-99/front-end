import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// export default function App() {
//   const [mode, setType] = useState('time');
//   const typeChange = () => {
//     setType((m) => (m ==="time" ? "distance" : "time"));
//   }

//   return (
//     <>
//       <button onClick={typeChange}>뭘로 변환할까</button>
//       {mode ==="time" ? <TimeApp/> : <DistanceApp/>}
//     </>
//   );
// }

// export function TimeApp() {
//   const [minutes, setMinutes] = useState();
//   const [flipped, setFlipped] = useState();
//   const onChange = (event) => {
//                 setMinutes(event.target.value);
//             };
//   const reset = () => setMinutes(0);
//   const onFlip = () => {
//     reset();
//     setFlipped((current) => !current)
//   }

//   return (
//   <div>
//       <h1>시간변환기</h1>
//       <div>
//       <label htmlFor="mm"> 분이다. </label>
//       <input 
//           value={flipped ? minutes*60 : minutes} 
//           id="mm" 
//           placeholder="분" 
//           type="number" 
//           onChange = {onChange}
//           disabled = {flipped}
//           /> 
//       </div>
//       <div>
//       <label htmlFor="hh">시간이다 </label>
//       <input 
//           value={flipped ? minutes : Math.round(minutes/60)} 
//           id="hh" 
//           placeholder="시간" 
//           type="number" 
//           onChange = {onChange}
//           disabled = {!flipped}
//           />
//       </div>
//       <button onClick={reset}>리셋한다</button>
//       <button onClick={onFlip}>뒤바뀜</button>
//   </div>
//   );
// }


// export function DistanceApp() {
//   const [minutes, setMinutes] = useState();
//   const [flipped, setFlipped] = useState();
//   const onChange = (event) => {
//                 setMinutes(event.target.value);
//             };
//   const reset = () => setMinutes(0);
//   const onFlip = () => {
//     reset();
//     setFlipped((current) => !current)
//   }

//   return (
//   <div>
//       <h1>키로미터 단위 바꾸기</h1>
//       <div>
//       <label htmlFor="mm">마일이다. </label>
//       <input 
//           value={flipped ? minutes*0.62 : minutes} 
//           id="mm" 
//           placeholder="마일" 
//           type="number" 
//           onChange = {onChange}
//           disabled = {flipped}
//           /> 
//       </div>
//       <div>
//       <label htmlFor="hh">키로미터이다 </label>
//       <input 
//           value={flipped ? minutes : minutes*1.6} 
//           id="hh" 
//           placeholder="키로" 
//           type="number" 
//           onChange = {onChange}
//           disabled = {!flipped}
//           />
//       </div>
//       <button onClick={reset}>리셋한다</button>
//       <button onClick={onFlip}>뒤바뀜</button>
//   </div>
//   );
// }



function MinutesToHours() {
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

function KmToMiles() {
  return (
    <>
      <h1>이건 키로미터용</h1>
    </>
  );
}


export default function App() {
  const [index, setIndex] = useState('0')
  const onSelect = (event) => {
    setIndex(event.target.value);
  }


  return (
  <div>
      <h1>이제 시작</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">분 & 시간</option>
        <option value="1">킬로미터 & 마일</option>
      </select>
      {index ==='0' ? <MinutesToHours/> : <KmToMiles/>}
  </div>
  );
}
