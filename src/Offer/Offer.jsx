import React from 'react'
import './offer.css'
import offer from '../../src/assets/offer.jpg'

const Offer = () => {
  return (
    <section className=" offer reveal" id="offer">
      <div className="container">
        <figure className="offer-banner">
          <img
            src={offer}
            width={450}
            height={300}
            loading="lazy"
            alt="offer products"
            className="w-100"
          />
        </figure>
        <div className="offer-content">
          <p className="offer-subtitle">
            <span className="span">Special Offer</span>
            <span className="badge">-50%</span>
          </p>
          <h2 className="h2-large section-title">Michigan State</h2>
          <p className="section-text">Nike Dunk Low 'Michigan State'</p>

          <div className="countdown">
            <span className="time">15</span>
            <span className="time">21</span>
            <span className="time">46</span>
            <span className="time">08</span>
          </div>
          <a href="#" className="btn btn-primary">
            Get Only $199.00
          </a>
        </div>
      </div>
    </section>
  )
}

export default Offer
