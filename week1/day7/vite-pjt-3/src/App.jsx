// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from 'react';
import Gallery from './Gallery/Gallery';
import Profile from './Gallery/Profile';


// export default function App() {
//   return (
//     <>
//       <Profile/>
//       <Gallery/>
//     </>
//   );
// }


// export default function Bio() {
//   return (
//     <div class="intro">
//       <h1>Welcome to my website!</h1>
    
//     <p class="summary">
//       You can find my thoughts here.
//       <br />
//       <b>And ictures</b> of scientists!
//     </p>
//     </div>
//   );
// }


// const today = new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { day: 'numeric'}
//   ).format(date);
// }


// export default function Todolist() {
//   return (
//     <h1>To Do List for {formatDate(today)}</h1>
//   );

// }


// export default function Todolist() {
//   return (
//     <div style={{
//       backgroundColor: 'black',
//     }}>
//     <ul style={{
//       color: 'pink',
//     }}>
//       <li>gdgd</li>

//     </ul>
//     </div>
//   );
// }


// export function Userphoto() {
//   return (
//     <img src="https://i.imgur.com/QIrZWGIs.jpg"/>
//   )
// }

// export default function Todolist(){
//   return (
//     <div>
//       <Userphoto/>
//       <h1>gdgd</h1>
//       <ul style={{
//         backgroundColor: 'black',
//         color: 'white',
//       }}>

//       <li>누구임 이거</li>

//       </ul>
//     </div>
//   );
// }



// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   },
//   imgurl: 'https://i.imgur.com/7vQD0fPs.jpg'
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src={person.imgurl}
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

// const baseUrl = 'https://i.imgur.com/';
// const person = {
//   name: 'Gregorio Y. Zara',
//   imageId: '7vQD0fP',
//   imageSize: 's',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src={baseUrl+person.imageId+".jpg"}
//         alt={person.name}
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }


// function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       width={100}
//       height={100}
//     />
//   );
// }

// export default function Prfile() {
//   return (
//     <Avatar/>
//   );
// }

// import { useState } from 'react';
       
// export default function App() {
//     const [cnt, setCounter] = useState(0);
//     const onClick = () => {
//         setCounter((cnt) => cnt +1);
//     };
//     return (
//     <div>
//         <Timechange/>
//         <h3>Total clicks: {cnt}</h3>
//         <button 
//         style={{
//           backgroundColor:'black',
//           color:'white'
//         }}
//         onClick ={onClick}>Click me</button>
//     </div>
// );
// }

// function Timechange() {
//     const [minutes, setMinutes] = useState(0);
//     const onChange = (event) => {
//         setMinutes(event.target.value);
//     };
//     const reset = () => setMinutes(0);
//     return (
//     <div>
//         <h1>시간 단위 바꾸기</h1>
//         <div>
//         <label htmlFor="mm"> 분이다. </label>
//         <input 
//             value={minutes} 
//             id="mm" 
//             placeholder="분" 
//             type="number" 
//             onChange = {onChange}
//             /> 
//         </div>
//         <div>
//         <label htmlFor="hh">시간이다 </label>
//         <input 
//             value={minutes/60} 
//             id="hh" 
//             placeholder="시간" 
//             type="number" />
//         </div>
//         <button onClick={reset}>리셋한다</button>
//     </div>
// );
// }; 


export default function Profiles() {
  return (
    <div>
      <Avatar
        size = {100}
        person = {{
          

        }}
      
      />
    </div>
  );
}