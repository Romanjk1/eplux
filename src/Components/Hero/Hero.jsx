import heroImg1 from '../../assets/hero-banner-1.jpg'
import heroImg2 from '../../assets/hero-banner-6.jpg'
import heroImg3 from '../../assets/hero-banner-5.jpg'
import './hero.css'

const Hero = () => {
  const b1 = {
    backgroundImage: `url(${heroImg1})`,
    zIndex: -1,
  }
  const b2 = {
    backgroundImage: `url(${heroImg2})`,
    zIndex: -1,
  }
  const b3 = {
    backgroundImage: `url(${heroImg3})`,
    zIndex: -1,
  }
  return (
    <section className="hero" id="home" data-section>
      <div className="container">
        <ul className="has-scrollbar">
          <li className="scrollbar-item">
            <div className=" has-bg-image hero-card" style={b1}>
              <div className="card-content">
                <h1 className="h1 hero-title">
                  #1 Exclusive <br /> Sneaker Store
                </h1>
                <p className="hero-text">
                  Gear up with the latest Nike innovations and conquer every
                  challenge.
                </p>
                <p className="price">Starting at $199</p>
                <a href="" className="btn btn-primary hero-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="has-bg-image hero-card" style={b2}>
              <div className="card-content">
                <h1 className="h1 hero-title">
                  Reveal The <br /> Beauty of Skin
                </h1>
                <p className="hero-text">
                  Made using clean, non-toxic ingredients, our products are
                  designed for everyone.
                </p>
                <p className="price">Starting at $7.99</p>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="hero-card has-bg-image " style={b3}>
              <div className="card-content">
                <h1 className="h1 hero-title">
                  Reveal The <br /> Beauty of Skin
                </h1>
                <p className="hero-text">
                  Made using clean, non-toxic ingredients, our products are
                  designed for everyone.
                </p>
                <p className="price">Starting at $7.99</p>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
