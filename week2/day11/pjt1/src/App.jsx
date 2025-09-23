import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sculptureList } from './data'



// function App() {
//   const [index, setIndex] = useState(0);
//   const [showindex, setShowIndex] = useState(false);
//   const prevonClick = () => { index > 0 ? setIndex((prev) => prev -1) : setIndex(sculptureList.length-1)};
//   const nextonClick = () => { index < sculptureList.length - 1 ? setIndex((prev) => prev +1) : setIndex(0)};
//   const showDetail = () => {setShowIndex(prev => !prev)};

//   let sculpture = sculptureList[index];
//   return (
//     <div>
//       <button onClick={prevonClick}>Prev</button>
//       <button onClick={nextonClick}>Next</button>
//       <h2>
//         <i>{sculpture.name}</i> by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={showDetail}>{showindex ? "show" : "hide"} detail</button>
//       <img style={{height: 100}} src={sculpture.url}/>   
//       {!showindex && <p>{sculpture.description}</p>}
//     </div>
//   );
//   }


export default function Picture() {
  const [isActive, setIsActive] = useState(false);
  if (isActive) {
    return (
      <div
        className="background"
        onClick={() => setIsActive(false)}
      >
        <img
          className="picture picture--active"
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
          onClick={e => e.stopPropagation()}
        />
      </div>
    );
  }
  return (
    <div className="background background--active">
      <img
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={() => setIsActive(true)}
      />
    </div>
  );
}