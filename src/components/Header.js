import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-section" style={{
      justifyContent:'space-between',
      display: 'flex',
      // position:'sticky',
      top:0,
      margin:0
    }}>
    <h1>Shopping Cart</h1>
    <h1><Link to="/"className="logo">Cart</Link></h1>
    </div>
    
    
  )
  
}


export default Header