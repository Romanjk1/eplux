import React from 'react'
import './footer.css'
import logo from '../../assets/eplogo.png'
import pay from '../../assets/payment-img.png'

const Footer = () => {
  return (
    <section className="footer reveal">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={logo} alt="Epluxury logo" width={153} />
            </a>
            <p className="footer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eum odio laboriosam tenetur dolorem. Labore, officiis
              magnam? Vitae, perferendis at?
            </p>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook" aria-hidden="true"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter" aria-hidden="true"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-pinterest" aria-hidden="true"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Information</p>
            </li>

            <li>
              <a href="" className="footer-link">
                About Company
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                Payment Type
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                Awards Winning
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                World Media Partner
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                Become an Agent
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                Refund Policy
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Category</p>
            </li>

            <li>
              <a href="" className="footer-link">
                Men's Shoes
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                Women's Shoes
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                Athletic Wears
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                Kids Shoes
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                Casual Kicks
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                Formal wears
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Help & Support</p>
            </li>

            <li>
              <a href="" className="footer-link">
                Dealers & Agents
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                FAQ Information
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                Return Policy
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                Order Tracking
              </a>
            </li>
            <li>
              <a href="" className="footer-link">
                List of Shops
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <a href="#">Rmcapitals</a>. All Rights Reserved
          </p>

          <ul className="footer-bottom-list">
            <li>
              <a className="footer-bottom-link">Privacy Policy</a>
            </li>
            <li>
              <a className="footer-bottom-link">Terms & Conditions</a>
            </li>
            <li>
              <a className="footer-bottom-link">Sitemap</a>
            </li>
          </ul>
          <div className="payment">
            <div className="payment-title">We Support</div>
            <img src={pay} alt="Online payment logos" className="payment-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
