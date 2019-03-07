import React from 'react'

const Item = ({activity, deleteItem, isAutoSendActive}) => {

        return <div onClick={()=>{deleteItem(activity.id)}} className={ `activity__item activity__item_type_${activity.type}`}>
                    <h3 className="activity__item-title">{activity.title}</h3>
                    <p className="activity__item-text text text__type_small">{activity.message}</p>
                    <div className="activity__item-image" style={activity.image?{backgroundImage : 'url(' + require(`./${activity.image}`) + ')'}: null}/>
                    <div className="activity__item-logo" style={{backgroundImage : 'url(' + require(`./${activity.logo}`) + ')'}}/>
                    <div className={activity.isSend && isAutoSendActive ? "js-already-send js-autosend-popup" :"js-autosend-popup"}><span>Отправлено другим пользователем</span></div>
                </div>
};

export default Item;