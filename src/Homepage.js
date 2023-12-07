import React from 'react'
import Things from './Things'


const Homepage = ({cart,setcart,data}) => {
  return (
    <div className='home'>
      <div className='homepage'>Homepage</div>
      <div className='imagediv'> {data.map((n,i)=>
        <Things key={i} cart={cart} setcart={setcart} n={n} name={n.title} image={n.thumbnail} price={n.price} description={n.description} rating={n.rating} stock={n.stock} id={n.id} />)}
      </div>
    </div>

  )
}

export default Homepage