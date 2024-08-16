import './header.css'
import logo from '../../assets/eplogo.png'

import { useState, useEffect } from 'react'

const Header = () => {
  const [Toggle, showMenu] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [lastScrolledPos, setLastScrolledPos] = useState(0)

  const handleScroll = () => {
    const scrollY = window.scrollY

    // Handle header activation based on scroll position
    if (scrollY > 150) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }

    // Handle sticky header based on scroll direction
    if (lastScrolledPos >= scrollY) {
      document.querySelector('[data-header]').classList.remove('header-hide')
    } else {
      document.querySelector('[data-header]').classList.add('header-hide')
    }

    setLastScrolledPos(scrollY)
  }

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrolledPos]) // Dependency array with lastScrolledPos to handle updates

  return (
    <>
      <div className="header">
        <div className="announcement-bar-section">
          <div className="announcement-bar">
            <div className="announcement-bar-text">free shipping over $50</div>
          </div>
        </div>
        <div
          data-header
          className={`header-section ${isActive ? 'active' : ''}`}
        >
          <div className="header-container">
            <div className="header-content">
              <button
                className="nav-open-btn"
                onClick={() => showMenu(!Toggle)}
              >
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
              </button>
              <a href="#" className="logo">
                <img src={logo} alt="Glowing" width={153} />
              </a>
              <div className="header-icon">
                <button className="icon" aria-label="search">
                  <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                </button>

                <button className="icon bag" aria-label="favorite item">
                  <ion-icon
                    name="bag-handle-outline"
                    aria-hidden="true"
                  ></ion-icon>
                  <span className="btn-badge">0</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="sidebar">
        <div className={Toggle ? 'mobile-navbar active ' : 'mobile-navbar'}>
          <div className="wrapper">
            <a href="#" className="logo">
              <img src={logo} alt="Glowing" width={153} />
            </a>
            <button className="nav-close-btn" onClick={() => showMenu(!Toggle)}>
              <i class="bx bx-x"></i>
            </button>
          </div>
          <ul className="navbar-list">
            <li>
              <a
                href="#home"
                className="navbar-link"
                onClick={() => showMenu(!Toggle)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#newarrivals"
                className="navbar-link"
                onClick={() => showMenu(!Toggle)}
              >
                New Arrivals
              </a>
            </li>
            <li>
              <a
                href="#shop"
                className="navbar-link"
                onClick={() => showMenu(!Toggle)}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#offer"
                className="navbar-link"
                onClick={() => showMenu(!Toggle)}
              >
                Offer
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="navbar-link"
                onClick={() => showMenu(!Toggle)}
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className={Toggle ? 'overlay active' : 'overlay'}></div>
      </div>
    </>
  )
}

export default Header
