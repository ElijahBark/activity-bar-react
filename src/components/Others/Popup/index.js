import React from 'react';
import popup from './popup.module.css';

const Popup = ({num, changePopupState}) => (
        <div className={popup.main} >
            <p className={`${popup.text} text text__type_small`}>
                Еще {num} человек могут видеть эту ленту и имеют возможность отправлять такую активность, поторопитесь и
                будьте первым
            </p>
            <div onClick={changePopupState} className={popup.close}/>
        </div>
);

export default Popup;