import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "./layouts/Layout";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>

        </Route>
      </Routes>
    </Router>
  )
}

export default App
