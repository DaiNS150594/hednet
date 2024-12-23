import React, { useState } from 'react';
import './header.scss';
import LOGO from '../../assets/image/logo-bee.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(false); 
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <header>
      <div className="header-wrap">
        <div className="logo">
          <a href="#home">
            <img src={LOGO} alt="img" />
            <div className="logo-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="115" height="19" viewBox="0 0 115 19" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3821 0.446533H13.8968C13.2928 0.446533 12.9907 0.748494 12.9907 1.35241V7.22771H8.12376C7.67503 7.22771 7.31259 7.41751 7.03645 7.79712L6.00092 9.09124C5.91463 9.19477 5.80245 9.24653 5.66438 9.24653H5.27605C5.10346 9.24653 5.01717 9.16026 5.01717 8.98771V1.35241C5.01717 0.748494 4.71514 0.446533 4.11108 0.446533H1.62581C1.02176 0.446533 0.719727 0.748494 0.719727 1.35241V17.1406C0.719727 17.7446 1.02176 18.0465 1.62581 18.0465H4.11108C4.71514 18.0465 5.01717 17.7446 5.01717 17.1406V11.1359H12.9907V17.1406C12.9907 17.7446 13.2928 18.0465 13.8968 18.0465H16.3821C16.9862 18.0465 17.2882 17.7446 17.2882 17.1406V1.35241C17.2882 0.748494 16.9862 0.446533 16.3821 0.446533ZM22.6646 18.0467H34.6767C35.2808 18.0467 35.5828 17.7447 35.5828 17.1408V15.0185C35.5828 14.4145 35.2808 14.1126 34.6767 14.1126H24.3473V11.369C24.3473 11.1965 24.4336 11.1102 24.6062 11.1102H33.5635C34.1676 11.1102 34.4696 10.8083 34.4696 10.2043V8.26317C34.4696 7.65924 34.1676 7.35728 33.5635 7.35728H27.6869C27.1691 7.35728 26.7549 7.54709 26.4443 7.92669L25.3311 9.35022C25.2448 9.45375 25.1326 9.50552 24.9945 9.50552H24.6062C24.4336 9.50552 24.3473 9.41924 24.3473 9.2467V4.38081H34.6767C35.2808 4.38081 35.5828 4.07885 35.5828 3.47493V1.35258C35.5828 0.748657 35.2808 0.446696 34.6767 0.446696H22.6646C22.3539 0.446696 21.9915 0.671009 21.5773 1.11964L20.49 2.31022C20.1966 2.62081 20.0499 2.99179 20.0499 3.42317V15.0702C20.0499 15.5016 20.1966 15.8726 20.49 16.1832L21.5773 17.3738C21.9915 17.8224 22.3539 18.0467 22.6646 18.0467ZM51.3354 18.0467H40.9114C40.6348 18.0467 40.2891 17.8224 39.8742 17.3738L38.7851 16.1832C38.4912 15.8726 38.3443 15.5016 38.3443 15.0702V3.42317C38.3443 2.99179 38.4912 2.62081 38.7851 2.31022L39.8742 1.11964C40.2891 0.671009 40.6348 0.446696 40.9114 0.446696H51.3095C51.7762 0.446696 52.1306 0.653754 52.3726 1.06787L56.729 8.6514C56.9537 9.04826 56.9537 9.45375 56.729 9.86787L52.3986 17.4514C52.1738 17.8483 51.8195 18.0467 51.3354 18.0467ZM42.6487 4.32905V14.1385H49.7277L52.4245 9.27258L49.7277 4.32905H42.6487ZM60.5619 18.0467H63.041C63.6435 18.0467 63.9448 17.7447 63.9448 17.1408V7.59022C63.9448 7.02081 63.8501 6.5463 63.6607 6.1667L62.9635 4.79493C62.8947 4.67415 62.8774 4.57062 62.9119 4.48434C62.9463 4.38081 63.0152 4.32905 63.1185 4.32905H63.4542C63.6435 4.32905 63.7468 4.38944 63.764 4.51022L70.0133 17.3996C70.2027 17.831 70.5556 18.0467 71.072 18.0467H75.9268C76.5294 18.0467 76.8306 17.7447 76.8306 17.1408V1.35258C76.8306 0.748657 76.5294 0.446696 75.9268 0.446696H73.4478C72.8452 0.446696 72.544 0.748657 72.544 1.35258V10.8773C72.544 11.3777 72.6387 11.8522 72.828 12.3008L73.5253 13.6985C73.5941 13.8192 73.6113 13.9314 73.5769 14.0349C73.5425 14.1212 73.4736 14.1643 73.3703 14.1643H73.0346C72.8797 14.1643 72.7764 14.1039 72.7247 13.9832L66.5013 1.09375C66.3119 0.662382 65.959 0.446696 65.4426 0.446696H60.5619C59.9594 0.446696 59.6581 0.748657 59.6581 1.35258V17.1408C59.6581 17.7447 59.9594 18.0467 60.5619 18.0467ZM94.2193 18.0467H82.2072C81.8965 18.0467 81.5341 17.8224 81.1199 17.3738L80.0326 16.1832C79.7392 15.8726 79.5925 15.5016 79.5925 15.0702V3.42317C79.5925 2.99179 79.7392 2.62081 80.0326 2.31022L81.1199 1.11964C81.5341 0.671009 81.8965 0.446696 82.2072 0.446696H94.2193C94.8234 0.446696 95.1254 0.748657 95.1254 1.35258V3.47493C95.1254 4.07885 94.8234 4.38081 94.2193 4.38081H83.8899V9.2467C83.8899 9.41924 83.9762 9.50552 84.1488 9.50552H84.5371C84.6752 9.50552 84.7874 9.45375 84.8737 9.35022L85.9869 7.92669C86.2975 7.54709 86.7118 7.35728 87.2295 7.35728H93.1061C93.7102 7.35728 94.0122 7.65924 94.0122 8.26317V10.2043C94.0122 10.8083 93.7102 11.1102 93.1061 11.1102H84.1488C83.9762 11.1102 83.8899 11.1965 83.8899 11.369V14.1126H94.2193C94.8234 14.1126 95.1254 14.4145 95.1254 15.0185V17.1408C95.1254 17.7447 94.8234 18.0467 94.2193 18.0467ZM114.067 0.446696H98.793C98.1889 0.446696 97.8869 0.748657 97.8869 1.35258V3.42317C97.8869 4.02709 98.1889 4.32905 98.793 4.32905H104.437V17.1408C104.437 17.7447 104.739 18.0467 105.343 18.0467H107.828C108.432 18.0467 108.734 17.7447 108.734 17.1408V7.20199C108.734 6.75336 108.544 6.39101 108.165 6.11493L107 5.23493C106.896 5.14866 106.844 5.04513 106.844 4.92434V4.58787C106.844 4.41532 106.931 4.32905 107.103 4.32905H114.067C114.671 4.32905 114.973 4.02709 114.973 3.42317V1.35258C114.973 0.748657 114.671 0.446696 114.067 0.446696Z" fill="white"/>
            </svg>
            </div>
          </a>
        </div>

        <div className={`menu ${isMenuOpen ? 'open-menu' : 'close-menu'}`}>
          <div className="menu-item menu-pricing">
            <a href="#pricing">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
              <g filter="url(#filter0_d_105_407)">
                <path d="M16 13L24 13L16 21L8 13L16 13Z" fill="#FCB43A"/>
                <path d="M16 12.9997L11.2 12.9997L16 8.19968L20.8 12.9997L16 12.9997Z" fill="#D28503"/>
              </g>
              <defs>
                <filter id="filter0_d_105_407" x="0" y="-3" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.833333 0 0 0 0 0 0 0 0 0.8 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_407"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_407" result="shape"/>
                </filter>
              </defs>
            </svg>
              PRICING</a>
          </div>
          <div className="menu-item menu-docs">
            <a href="#docs">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
              <g filter="url(#filter0_d_105_407)">
                <path d="M16 13L24 13L16 21L8 13L16 13Z" fill="#FCB43A"/>
                <path d="M16 12.9997L11.2 12.9997L16 8.19968L20.8 12.9997L16 12.9997Z" fill="#D28503"/>
              </g>
              <defs>
                <filter id="filter0_d_105_407" x="0" y="-3" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.833333 0 0 0 0 0 0 0 0 0.8 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_407"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_407" result="shape"/>
                </filter>
              </defs>
            </svg>
              DOCS</a>
          </div>
          <div className="menu-item menu-home">
            <a className='active' href="#home">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
              <g filter="url(#filter0_d_105_407)">
                <path d="M16 13L24 13L16 21L8 13L16 13Z" fill="#FCB43A"/>
                <path d="M16 12.9997L11.2 12.9997L16 8.19968L20.8 12.9997L16 12.9997Z" fill="#D28503"/>
              </g>
              <defs>
                <filter id="filter0_d_105_407" x="0" y="-3" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.833333 0 0 0 0 0 0 0 0 0.8 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_407"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_407" result="shape"/>
                </filter>
              </defs>
            </svg>
              HOME</a>
          </div>
          <div className="menu-item menu-blog">
            <a href="#blog">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
              <g filter="url(#filter0_d_105_407)">
                <path d="M16 13L24 13L16 21L8 13L16 13Z" fill="#FCB43A"/>
                <path d="M16 12.9997L11.2 12.9997L16 8.19968L20.8 12.9997L16 12.9997Z" fill="#D28503"/>
              </g>
              <defs>
                <filter id="filter0_d_105_407" x="0" y="-3" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.833333 0 0 0 0 0 0 0 0 0.8 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_407"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_407" result="shape"/>
                </filter>
              </defs>
            </svg>
              BLOG</a>
          </div>
          <div className="menu-item menu-services">
            <a href="#services">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
              <g filter="url(#filter0_d_105_407)">
                <path d="M16 13L24 13L16 21L8 13L16 13Z" fill="#FCB43A"/>
                <path d="M16 12.9997L11.2 12.9997L16 8.19968L20.8 12.9997L16 12.9997Z" fill="#D28503"/>
              </g>
              <defs>
                <filter id="filter0_d_105_407" x="0" y="-3" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.833333 0 0 0 0 0 0 0 0 0.8 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_407"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_407" result="shape"/>
                </filter>
              </defs>
            </svg>
              SERVIVES</a>
          </div>
          <button className="close-menu" onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.0711 4.92896L11.4853 6.34317L6.8284 11L16.0003 11.0002V13.0002L6.82845 13L11.4853 17.6569L10.0711 19.0711L3 12L10.0711 4.92896ZM18.0002 19V4.99997H20.0002V19H18.0002Z" fill="white"/>
            </svg>
          </button>
        </div>

        <div  className='off-canvas' onClick={openMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" fill="#FCFFFF"/>
        </svg>
        </div>
      </div>

    </header>
  )
}

export default Header