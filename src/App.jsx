import React from 'react'
import { useEffect } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Newsletter from './Components/Newsletter/Newsletter'
import Footer from './Components/footer/Footer'
import NewArrivals from './Components/NewArrivals/NewArrivals'
import Offer from './Offer/Offer'
import BackToTop from './Components/BackToTop'
import Brand from './Components/Brand'

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal')

    const scrollReveal = () => {
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight / 2) {
          section.classList.add('active')
        } else {
          section.classList.remove('active') // Optional: remove the class if not in view
        }
      })
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', scrollReveal)

    // Call scrollReveal once to check initial positions
    scrollReveal()

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', scrollReveal)
    }
  }, []) // Empty dependency array means this useEffect runs once after the initial render
  return (
    <>
      <div id="wrapper">
        <Header />
        <Hero />
        <NewArrivals />
        <Offer />
        <Brand />

        <Newsletter />
        <Footer />
      </div>
      <BackToTop />
    </>
  )
}

export default App
