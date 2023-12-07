import React from 'react'
import {Link} from 'react-router-dom'
import {IoAppsSharp} from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbShoppingCart } from "react-icons/tb";
import { TbDeviceMobileHeart } from "react-icons/tb";
import { TbBrandWalmart } from "react-icons/tb";





const Header = ({cart}) => {
  return (
    <>
      <div className='valmart'>
        <h3 className='head'>valmart<TbBrandWalmart className='logo'/></h3>
        <div className='department'>
        <IoAppsSharp className='departmenticon'/>
        <button className='departmentbtn'>Departments</button>
      </div>
      <div className='services'>
        <GrServices className='serviceicon'/>
        <button className='servicesbtn'>Services</button>
      </div>
      <div className='searchdiv'>
        <input className="search" type="search" placeholder="Search every thing at valmart online and in store"/>
        <div className='searchicondiv'><FaSearch className='searchicon'/></div>
      </div>
      <div className='myItems'>
        <FaRegHeart className='myItemsIcon'/>
        <span className='spantag'>Reorder</span>
        <button className='myItemsbtn'>My Items</button>
      </div>
      <div className='signin'>
        <FaRegCircleUser className='myItemsIcon'/>
        <span className='spantag'>sign in</span>
        <button className='myItemsbtn'>Account</button>
      </div>
      <div className="shop">
        <p className="number">{cart}</p>
        <TbShoppingCart className='shopicon'/>
      </div>
    </div>
    <hr className="hrtag" />
    <div className='domain'>
      <TbDeviceMobileHeart className='liicon'/>

      <li className='li1'>How do you want your item?</li>
      <li><Link to='/' className='li'>Home Page</Link></li>
      <li><Link to='/Electronics' className='li'>Electronics</Link></li>
      <li><Link to='/Fashion' className='li'>Fashion</Link></li>
      <li><Link to='/Homeproducts' className='li'>Home Products</Link></li>
    </div>
    </>
    )
}

export default Header