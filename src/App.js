import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './components/Coin';
import Header from './components/Header';

function App() {
  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState('');
  const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
  useEffect(() => {
    axios.get(url)
    .then(res => {
      setCoins(res.data);
      // console.log(res.data);
    })
    .catch(err => console.log(err));
    // try {
    //   fetch(url)
    //   .then(res => res.json())
    //   .then(data => setCoins(data));
    // } catch (error) {
    //   console.log(error);
    // }
    // console.log(coins);
  }, []);

  const handleChange = (e) =>{
    setSearch(e.target.value);
  } 

  const filterCoin = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  ); 

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className='coin-text'>search a currency</h1>
        <form>
          <input onChange={handleChange} type='text' placeholder='search' className='coin-input'/>
        </form>
      </div>
      <Header/>
      <div>
        {filterCoin.map(coin => {
          return (
            <Coin key={coin.id} 
              name={coin.name} 
              image = {coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
