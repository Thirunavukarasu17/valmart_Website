import React from 'react'

const Footer = () => {
  var footer=["All Departments",
    'Store Directory',
    'Careers',
    'Our Company',
    'Sell on Walmart.com',
    'Help',
    'COVID-19 Vaccine Scheduler',
    'Product Recalls',
    'Accessibility',
    'Tax Exempt Program',
    'Get the Walmart App',
    'Sign-up for Email',
    'Safety Data Sheet',
    'Terms of Use',
    'Privacy & Security',
    'California Supply Chain Act',
    'Privacy choices iconYour Privacy Choices',
    'Notice at Collection',
    'Request My Personal Information',
    'Brand Shop Directory']
  var year=new Date();
  return (
    <footer className='footer'>
      <div className='divatag' >
        {footer.map((e)=>{return <a className='atag' href='www.google.com'> {e} </a>})}
      </div>
      
      VALMART Copyright &copy;{year.getFullYear()}</footer>
  )
}


export default Footer 