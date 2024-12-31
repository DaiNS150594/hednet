import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import './hero.scss';
import sampleVideo from '../../assets/image/video-hero-full.mp4';
import Curve from '../../assets/image/Curve-text.png';
import CurveHover from '../../assets/image/Curve-text-hover.png';
import BEEMOBILE from '../../assets/image/Hednet_mobile.mp4';

const Hero = () => {
  const words = ['Connect', 'Compute', 'Earn']; // Array of words to cycle through
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [hasShownInitialEffects, setHasShownInitialEffects] = useState(false);

  useEffect(() => {
    // Select elements
    const textWrapper1 = document.querySelector('.ml16');
    const textWrapper2 = document.querySelector('.ml12');
    const button = document.querySelector('.btnHero');

    // Animate ml12 and btnHero only the first time Connect appears
    const animateTextWrapper2AndButton = () => {
      if (textWrapper2) {
        textWrapper2.innerHTML = textWrapper2.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );

        anime.timeline().add({
          targets: '.ml12 .letter',
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1200,
          delay: (el, i) => 500 + 30 * i,
        });
      }

      if (button) {
        anime.timeline().add({
          targets: '.btnHero',
          opacity: [0, 1],
          scale: [0.8, 1],
          easing: 'easeOutExpo',
          duration: 1200,
          delay: 1000, // Button animation starts after ml12 animation
          complete: () => {
            button.classList.add('show-btn');
            setTimeout(() => {
              button.classList.add('show-border');
            }, 500);
          },
        });
      }
    };

    // Animate ml16 text
    const animateTextWrapper1 = () => {
      if (textWrapper1) {
        textWrapper1.innerHTML = words[currentWordIndex]
          .split('')
          .map((char) => `<span class='letter'>${char}</span>`)
          .join('');

        anime.timeline().add({
          targets: '.ml16 .letter',
          translateY: [-100, 0],
          easing: 'easeOutExpo',
          duration: 1400,
          delay: (el, i) => 30 * i,
        });
      }
    };

    // Determine whether to animate ml12 and btnHero
    if (words[currentWordIndex] === 'Connect' && !hasShownInitialEffects) {
      animateTextWrapper2AndButton();
      setHasShownInitialEffects(true); // Ensure effects run only once
    }

    // Always animate ml16 text
    animateTextWrapper1();

    // Set interval to update ml16 text
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentWordIndex, words, hasShownInitialEffects]);

  return (
    <div className="hero">
      <div className="cricle-rotate">
        <img className="c-n" src={Curve} alt="img" />
        <img className="c-hover" src={CurveHover} alt="img" />
        <a href="#link">explore now!</a>
      </div>

      <video className="video-hero-pc" autoPlay loop muted playsInline>
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video className="video-hero-mobile" autoPlay loop muted playsInline>
        <source src={BEEMOBILE} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="wrap-hero">
        <h1 className="ml16">Connect</h1>
        <div className="text-hero ml12">The future of decentralized computing</div>
        <a className="btnHero hover-border-5" href="#learn-more">
          Learn more
          <svg
            className="arrow-n"
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="20"
            viewBox="0 0 47 20"
            fill="none"
          >
            <path
              d="M39.399 9.16658L34.929 4.69657L36.1075 3.51807L42.5893 9.99992L36.1075 16.4817L34.929 15.3032L39.399 10.8332H4.25598V9.16658H39.399Z"
              fill="white"
            />
          </svg>
          <svg
            className="arrow-hover"
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="20"
            viewBox="0 0 47 20"
            fill="none"
          >
            <path
              d="M39.399 9.16658L34.929 4.69657L36.1075 3.51807L42.5893 9.99992L36.1075 16.4817L34.929 15.3032L39.399 10.8332H4.25598V9.16658H39.399Z"
              fill="#FCB43A"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
