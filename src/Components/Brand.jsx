import React from 'react'
import brand1 from './../assets/logo1.png'
import brand2 from './../assets/logo2.png'
import brand3 from './../assets/logo3.png'
import brand4 from './../assets/logo4.png'

const Brand = () => {
  return (
    <section className="brand section reveal">
      <h2 className="h2 section-title brand-title">Brands We Sell</h2>
      <div className="brand-container">
        <img src={brand1} alt="logo image" className="brand-img" />
        <img src={brand2} alt="logo image" className="brand-img" />
        <img src={brand3} alt="logo image" className="brand-img" />
        <img src={brand4} alt="logo image" className="brand-img" />
      </div>
    </section>
  )
}

export default Brand
