import React from 'react'
import barbie from './images/barbie.jpg'
import barbie2 from './images/barbie2.jpg'
import bb from './images/bb.jpg'
import card from './images/card.jpg'
import crocs from './images/crocs.jpg'
import deal from './images/deal.jpg'
import headset from './images/headset.jpg'
import th from './images/th.jpg'
import tv from './images/tv.jpg'
import valmart from './images/valmart.jpg'
import walmart from './images/walmart.jpg'



const Banner = () => {
  return (
    <div className="banner">
        <div><img src={valmart} alt="valmart" /></div>
        <div><img src={tv} alt="valmart" /></div>
        <div><img src={walmart} alt=""/></div>
        <div><img className='tv' src={th} alt="valmart" /></div>
        <div><img src={deal} alt="barbie" /> </div>
        <div><img src={headset} alt="valmart" /></div>
        <div> <img src={bb} alt="barbie" /> </div>       
        <div><img src={crocs} alt="crocs" /></div>
        <div><img src={barbie} alt="barbie" /></div>
        <div><img src={barbie2} alt="barbie2" /></div>
        <div><img src={card} alt="car" /></div>
    </div>


  )
}

export default Banner