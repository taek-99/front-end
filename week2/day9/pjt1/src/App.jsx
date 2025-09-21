import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PropTypes from "prop-types";
import './App.css'


function Btn({text, fontSize = 20}) {
  return (
    <>
      <button
        style={{
          backgroundColor : 'tomato',
          color: 'white',
          padding: "10px 20px",
          border: 0,
          borderRadius: 20,
          fontSize: {fontSize},
        }}
        >{text}</button>
    </>
  );
}

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
}

export default function App() {
const [value, setValue] = useState("Save Changes");

  return (
    <>
      <h1>Day9</h1>
      <Btn text={value} fontSize={10} />
      <Btn text="Confirm"/>
    </>
  );
}