import React from 'react'
import './coin.css';

const Header = () => {
  return (
    <div className='coin-container'>
      <div className="coin-row">
        <div className="coin">
            <h1>NAME</h1>
            <p className="coin-symbol">SYMBOL</p>
        </div>
        <div className="coin-data">
            <p className="coin-price">PRICE</p>
            <p className="coin-volume">VOLUME</p>
            <p className="coin-percent red">PRICE CHANGE</p>
            <p className="coin-marketcap">MARKETCAP</p>
        </div>
      </div>
    </div>
  )
}

export default Header
