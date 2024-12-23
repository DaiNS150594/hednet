import React, { useState, useEffect } from 'react';
import { capitalizeString } from './utils';
import anime from 'animejs';
import './hero.scss'
import sampleVideo from '../../assets/image/video-hero.mp4'
import Curve from '../../assets/image/Curve-text.png'

const Header = () => {

    useEffect(() => {
        const textWrapper = document.querySelector('.ml16');
        const textWrapper2 = document.querySelector('.ml12');
        const button = document.querySelector('.btnHero');
    
        if (textWrapper) {
          textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
          );
    
          // Anime.js timeline for .ml16
          anime
            .timeline()
            .add({
              targets: '.ml16 .letter',
              translateY: [-100, 0],
              easing: 'easeOutExpo',
              duration: 1400,
              delay: (el, i) => 30 * i,
            });
        }
    
        if (textWrapper2) {
          textWrapper2.innerHTML = textWrapper2.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
          );
    
          // Anime.js timeline for .ml12
          anime
            .timeline()
            .add({
              targets: '.ml12 .letter',
              translateX: [40, 0],
              translateZ: 0,
              opacity: [0, 1],
              easing: 'easeOutExpo',
              duration: 1200,
              delay: (el, i) => 500 + 30 * i,
            })
            // Add the class early (2 seconds before completion)
            .add({
              targets: '.btnHero',
              duration: 0,
              complete: () => {
                if (button) {
                  button.classList.add('show-btn');
                  setTimeout(() => {
                    button.classList.add('show-border');
                  }, 500);
                }
              },
            }, '-=1500') // Timing offset for 2 seconds early
            .add({
              targets: '.ml12',
              opacity: 1,
              duration: 0, // Keep text visible
            });
        }
      }, []);

  return (
    <div className="hero">
        {/* <div style={{ padding: '20px' }}>
            <h1>Custom Function in React Example</h1>
            <input
            type="text"
            placeholder="Enter text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ marginRight: '10px', padding: '5px' }}
            />
            <button onClick={handleTransform} style={{ padding: '5px 10px' }}>
            Capitalize
            </button>
            <p>
            <strong>Output:</strong> {output}
            </p>
        </div> */}

        <div className="cricle-rotate">
            <img src={Curve} alt="img" />
        </div>

        <video
        autoPlay
        loop
        muted
        playsInline
        >
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
        </video>

        <div className="wrap-hero">
            <h1 className='ml16'>Connect</h1>
            <div className="text-hero ml12">
                The future of decentralized computing
            </div>
            <a className='btnHero hover-border-5' href="#learn-more">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="20" viewBox="0 0 47 20" fill="none">
                    <path d="M39.399 9.16658L34.929 4.69657L36.1075 3.51807L42.5893 9.99992L36.1075 16.4817L34.929 15.3032L39.399 10.8332H4.25598V9.16658H39.399Z" fill="white"/>
                </svg>
            </a>
        </div>
    </div>
  )
}

export default Header