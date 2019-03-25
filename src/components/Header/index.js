import React from 'react';
import header from './header.module.css';

const Header = ({isActive, changeState}) => (
        <header onClick={changeState}  className={header.main}>
            <div  className={isActive ? header.icon:  `${header.icon} ${header.rotate}`} />
            <p className={`${header.text} text`}>
                Отправляйте активность<br />
                разного рода бесплатно!
            </p>
        </header>
);

export default Header;





