import React from 'react'
import Electronics from './Electronics'

const Products = ({cart,setcart,data,pname}) => {


    

  return (
    <> 
      <div className='products'>Products</div>
      {(pname==='e')?<Electronics cart={cart} setcart={setcart} data={data}/>:<p>no data</p>}
    
    </>
    
  )
}

export default Products