import React from 'react';
import './style.css';

const Header = ({isActive, changeState}) => {
        return <header onClick={changeState}  className="activity__header">
            <div  className={isActive ? "activity__header-icon ":  "activity__header-icon js-rotate"} />
            <p className="activity__header-text text">
                Отправляйте активность<br />
                разного рода бесплатно!
            </p>
        </header>
};



export default Header;





