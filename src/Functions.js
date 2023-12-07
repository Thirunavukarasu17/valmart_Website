import React from 'react'

const Functions = () => {
    const [data,setData]=useState([])
const [cart,setcart]=useState("")

const addProduct=()=>{
  setcart('bjkbk')
  console.log(cart)
}



useEffect(()=> {
  const fetchdata=async()=>{
    const data1=await fetch('https://dummyjson.com/products?limit=6');
    const res= await data1.json()
    const newdata=res.products
    console.log(newdata)
    setData(newdata)
  }
  fetchdata()
},[] )

  return (
    {null}
  )
}

export default Functions