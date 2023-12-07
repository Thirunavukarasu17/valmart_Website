import React from 'react'

const Things = ({cart,setcart,name,image,price,description,stock,id}) => {

  const addProduct=()=>{
    setcart(cart+1)
  }
  
  
  return (
    <div className='things'>  
        <div className="item" id={id} onClick={addProduct} onDoubleClick={()=>setcart(cart-1)}><img id={id} src={image} className='productimg' alt="images"/>
        <p className='ptag'>Product Name: <span>{name}</span></p>
        <p className='ptag'>Description: <span>{description}</span></p>
        <p className='ptag'>price: <span> $ {price}</span></p>
        <p className='ptag'>Stock Availability: <span>{stock}</span></p>
        </div>
    </div>
  )
}

export default Things