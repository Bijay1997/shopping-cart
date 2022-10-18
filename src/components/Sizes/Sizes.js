import React from 'react'

const Sizes = () => {
  return (
    <div className="container" style={{
        width:'20%',
        padding_left:'0px',
    }}><h1>Sizes:</h1>
    <ul className="sizes" style={{
       
    //    styles for every button
        left: '0px',
        width:'20px',
        height:'35px',
        borderRadius:'50%',
        fontSize:'0.8em',
        
        display:'flex',
        flexDirection:'row',
       
        margin:'15px',
        
    }} >
    <button onClick>XS</button>
    <button>S</button>
    <button>M</button>
    <button>ML</button>
    <button>L</button>
    <button>XL</button>
    <button>XXL</button>

    </ul>
    <p>Leave a star on Github if this repository was useful :)</p>
   
    
    </div>
  )
}

export default Sizes