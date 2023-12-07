import Header from './Header';
import { Routes,Route} from 'react-router-dom';
import Homepage from './Homepage';
import Products from './Products';

import Footer from './Footer';
import Banner from './Banner';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState([])
  const [cart,setcart]=useState(0)



  useEffect(()=> {
      const fetchdata=async()=>{
      const data1=await fetch('https://dummyjson.com/products?limit=55');
      const res= await data1.json()
      const newdata=res.products
      setData(newdata)
    }
    fetchdata()
  },[] )


  return (
    <div className="App">
        <Header cart={cart}/>
        <Banner/>
        <Routes>
          <Route path='/' element={<Homepage cart={cart} setcart={setcart} data={data}/>}></Route>
          <Route path='/Electronics' element={<Products cart={cart} setcart={setcart} data={data} pname="e"/>}/> 
          <Route path='/Fashion' element={<Products data={data} pname="fashion"/>}/>
          <Route path='/Homeproducts' element={<Products data={data} pname="home"/>}/>
        </Routes>
        <Footer/>
        
    </div>
  )
}

export default App;
