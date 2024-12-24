import React, { useState, useEffect } from 'react';
import { capitalizeString } from './utils';
import anime from 'animejs';
import './hero.scss'
import sampleVideo from '../../assets/image/video-hero.mp4'
import Curve from '../../assets/image/Curve-text.png'
import CurveHover from '../../assets/image/Curve-text-hover.png'
import BEEMOBILE from '../../assets/image/Hednet_mobile.mp4'

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

        <div className="cricle-rotate">
            <img class="c-n" src={Curve} alt="img" />
            <img class="c-hover" src={CurveHover} alt="img" />
            <a href="#link">explore now!</a>
        </div>

        <video
        className='video-hero-pc'
        autoPlay
        loop
        muted
        playsInline
        >
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
        </video>

        <video
        className='video-hero-mobile'
        autoPlay
        loop
        muted
        playsInline
        >
        <source src={BEEMOBILE} type="video/mp4" />
        Your browser does not support the video tag.
        </video>

        <div className="wrap-hero">
            <h1 className='ml16'>Connect</h1>
            <div className="text-hero ml12">
                The future of decentralized computing
            </div>
            <a className='btnHero hover-border-5' href="#learn-more">
                Learn more
                <svg class="arrow-n" xmlns="http://www.w3.org/2000/svg" width="47" height="20" viewBox="0 0 47 20" fill="none">
                    <path d="M39.399 9.16658L34.929 4.69657L36.1075 3.51807L42.5893 9.99992L36.1075 16.4817L34.929 15.3032L39.399 10.8332H4.25598V9.16658H39.399Z" fill="white"/>
                </svg>
                <svg class="arrow-hover" xmlns="http://www.w3.org/2000/svg" width="47" height="20" viewBox="0 0 47 20" fill="none">
                    <path d="M39.399 9.16658L34.929 4.69657L36.1075 3.51807L42.5893 9.99992L36.1075 16.4817L34.929 15.3032L39.399 10.8332H4.25598V9.16658H39.399Z" fill="#FCB43A"/>
                </svg>
            </a>
        </div>
    </div>
  )
}

export default Header