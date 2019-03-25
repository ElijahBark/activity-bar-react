import React from 'react';
import item from '../items.module.css'

const Item = ({activity, deleteItem, isAutoSendActive}) => (
    <div onClick={()=>{deleteItem(activity.id)}} className={ `${item.main} ${item[activity.type]}`}>
        <h3 className={item.title}>{activity.title}</h3>
        <p className={`${item.text} text text__type_small`}>{activity.message}</p>
        {activity.image? <img className={item.image} src={activity.image} alt={'item-content'}/>: null}
        <img className={item.logo} src={activity.logo} alt={'logo'}/>
        <div className={activity.isSend && isAutoSendActive ? `${item.send} ${item.popup}` : item.popup}><span>Отправлено другим пользователем</span></div>
    </div>
);

export default Item;