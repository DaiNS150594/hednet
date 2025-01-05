import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import IMGLOADING from './assets/image/Hednet_loading.png';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up the interval for adding the "active" class to bars
    const interval = 5 * 1000 / 16; // 5/16 seconds in milliseconds
    const bars = document.querySelectorAll('.bar-item');
    let currentIndex = 0;

    const addActiveClass = () => {
      if (currentIndex < bars.length) {
        // Add active class to the current bar
        bars[currentIndex].classList.add('active');
        currentIndex++;
      } else {
        // Stop the interval once all bars have the "active" class
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(addActiveClass, interval);

    // Hide loading screen after 5 seconds
    const timer = setTimeout(() => setLoading(false), 5000);

    // Cleanup interval and timer on component unmount
    return () => {
      clearInterval(intervalId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div id="loading-screen" className={`wrap-loading ${!loading ? 'hidden' : ''}`}>
        <div className="loading-container">
          <img src={IMGLOADING} alt="Loading" />
        </div>
        <div className="loading-bar">
          {Array.from({ length: 16 }).map((_, index) => (
            <div key={index} className="bar-item"></div>
          ))}
        </div>
        <h3 className="loading-text">Wait a second...</h3>
      </div>
      <div id="main-content" className={`${!loading ? 'visible' : ''}`}>
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
};

export default App;
