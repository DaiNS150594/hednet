import React, { useState } from 'react';
import { capitalizeString } from './utils';
import './header.css'
import ME from '../../assets/image/banner-hp.jpg'

const Header = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleTransform = () => {
    setOutput(capitalizeString(input));
  };

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shin Shine</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <div className="me">
          <img src={ME} alt="img" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      <div style={{ padding: '20px' }}>
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
    </div>
    </header>
  )
}

export default Header