import React from 'react'
import './newarrivals.css'
import img1 from '../../assets/product-01.jpg'
import img2 from '../../assets/product-02.jpg'
import img3 from '../../assets/product-03.jpg'
import img4 from '../../assets/product-04.jpg'
import img5 from '../../assets/product-05.jpg'
import img6 from '../../assets/product-06.jpg'
import img7 from '../../assets/product-07.jpg'
import img8 from '../../assets/product-08.jpg'
import img9 from '../../assets/product-09.jpg'
import img10 from '../../assets/product-10.jpg'
import img11 from '../../assets/product-11.jpg'
const NewArrivals = () => {
  return (
    <>
      <section className="section shop reveal" id="newarrivals">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="h2 section-title">Our Bestsellers</h2>
            <a href="#" className="btn-link">
              <span className="span">Shop All Products</span>
              <i class="bx bx-right-arrow-alt"></i>
            </a>
          </div>
          <ul className="has-scrollbar">
            <li className="scrollbar-item">
              <div className="shop-card">
                <div
                  className="card-banner img-holder"
                  style={{ width: '540', height: '720' }}
                >
                  <img
                    src={img1}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />
                  <span className="badge">-20%</span>
                  <div className="card-actions">
                    <button className="action-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="repeat-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <del className="del">$499.00</del>
                    <span className="span">$399.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Nike Dunk Low Pro SB 'Electric Pack'
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img2}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="repeat-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$499.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Nike Dunk Low 'Starry Swoosh'
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img3}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="repeat-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$599.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Nike Dunk Low SB 'Trocadero Gardens'
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img4}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="repeat-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$299.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Air Jordan 1 Retro High
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img5}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="repeat-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <del className="del">$399.00</del>
                    <span className="span">$299.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Air Jordan 1 Mid 'Lucky Green'
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img6}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="repeat-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$699.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Nike Dunk Low 'Airbush - Industrial Blue'
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className=" shop reveal" id="shop">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="h2 section-title">Under $500</h2>
            <a href="#" className="btn-link">
              <span className="span">Shop All Products</span>
              <i class="bx bx-right-arrow-alt"></i>
            </a>
          </div>
          <ul className="has-scrollbar">
            <li className="scrollbar-item">
              <div className="shop-card">
                <div
                  className="card-banner img-holder"
                  style={{ width: '540', height: '720' }}
                >
                  <img
                    src={img7}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />
                  <span className="badge">-20%</span>
                  <div className="card-actions">
                    <button className="action-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="repeat-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <del className="del">$559.00</del>
                    <span className="span">$449.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Nike SB Dunk 'Pastoral Print'
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img8}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="repeat-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$449.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Nike Dunk Low Premium 'Barely Green'
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img9}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="repeat-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$349.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Nike Dunk Low 'Airbush - Industrial Blue'
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img10}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />
                  <span className="badge">-20%</span>
                  <div className="card-actions">
                    <button className="action-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="repeat-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$369.00</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">
                      Air Jordan 1 Mid 'Armory Navy'
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img11}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="repeat-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <del className="del">$399.00</del>
                    <span className="span">$299.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Travis Scott x Air Force 1 'utopia'
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img1}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <ion-icon
                        name="bag-handle-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                    <button className="action-btn">
                      <ion-icon
                        name="repeat-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$299.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Nike Dunk Low Pro SB 'Electric pack'
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default NewArrivals
