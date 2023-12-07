import React from 'react'
import Things from './Things'

const Electronics = ({cart,setcart,data}) => {
  return (
    <div className='imagediv'> {data.map((n,i)=>
        <Things key={i} cart={cart} setcart={setcart} n={n} name={n.title} image={n.thumbnail} price={n.price} description={n.description} rating={n.rating} stock={n.stock} id={n.id} />)}
      </div>
  )
}

export default Electronics



