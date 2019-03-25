import React from 'react';
import style from './autosend.module.css';

const AutoSend = ({isAutoSendActive, changeAutoSendState}) => (
     <div onClick={changeAutoSendState} className={isAutoSendActive? `${style.main} ${style.active} `: `${style.main}` }>
        <p className={isAutoSendActive? `${style.text} text text__type_small ${style.checkbox}`:
            `${style.text} text text__type_small`}>
            Автоматическая отправка
        </p>
     </div>
);


export default AutoSend;



