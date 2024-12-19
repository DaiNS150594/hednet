import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Hero from './components/about/About'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App