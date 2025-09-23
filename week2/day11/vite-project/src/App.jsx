import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);

  useEffect (() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
          .then((response) => response.json())
          .then((json) => setCoin(json));
          setLoading(false);
  }, [])

  return (
    <div>
      <h1>코인이래 {coin.length}</h1>
      {loading ? <strong>Loading...</strong>: null}
      <ul>
        {coin.map((coin, index) => <li>{coin.name} = {coin.symbol} : {coin.quotes.USD.price}</li>)}
      </ul>
    </div>
  )
}

export default App
