import React from 'react';
import './style.css';

const AutoSend = ({isAutoSendActive, changeAutoSendState}) => {
    return <div onClick={changeAutoSendState} className={isAutoSendActive? "activity__autosend  js-autosend-active" : "activity__autosend" }>
        <p className={isAutoSendActive? "activity__autosend-text text text__type_small js-autosend-text": "activity__autosend-text text text__type_small"}>
            Автоматическая отправка
        </p>
    </div>
};


export default AutoSend;



