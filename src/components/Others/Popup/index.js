import React from 'react';
import './style.css';

const Popup = ({isPopupActive, num, changePopupState}) => {
    return (
        <div className={isPopupActive ? 'activity__others-popup' : 'activity__others-popup js-display-none'} >
            <p className="activity__others-popup-text text text__type_small">
                Еще {num} человек могут видеть эту ленту и имеют возможность отправлять такую активность, поторопитесь и
                будьте первым
            </p>
            <div onClick={changePopupState} className="activity__others-popup-close"/>
        </div>
    );


}

export default Popup;