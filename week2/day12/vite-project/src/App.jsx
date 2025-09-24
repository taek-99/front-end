import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movie from './components/movie';
import Home from './routes/Home';
import Detail from './routes/Detail'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/movie/:id' element={<Detail/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>
  );
}

export default App
