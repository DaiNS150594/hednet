import React, { useState } from 'react';
import './footer.scss'
import ICON_D from '../../assets/image/discord.svg'
import ICON_T from '../../assets/image/telegram.svg'
import ICON_X from '../../assets/image/x-icon.svg'

const Header = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <footer>
        <div className="wrap-footer">
            <a href="#discord" target='_balnk'>
                <img src={ICON_D} alt="img" />
                <span>Discord</span>
            </a>
            <a href="#telegram" target='_balnk'>
                <img src={ICON_T} alt="img" />
                <span>Telegram</span>
            </a>
            <a href="#x" target='_balnk'>
                <img src={ICON_X} alt="img" />
                <span>X</span>
            </a>
        </div>
    </footer>
  )
}

export default Header