import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './routes/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/movie/:id' element={<Detail/>}/>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
