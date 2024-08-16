import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <section className="newsletter reveal">
      <div className="newsletter-container">
        <div className="newsletter-card">
          <h2 className="card-title">Subscribe Newsletter</h2>
          <p className="card-text">
            Enter your email below to be the first to know about new collections
            and product launches.
          </p>
          <form action="" className="card-form">
            <div className="input-wrapper">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="input-field"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <span>Subscribe</span>
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
