import React, {Component} from 'react';
import {activityCreator} from '../../tools';
import {COUNT_OF_ITEMS} from '../../config';
import './style.css';
import Item from "./Item";

export default class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: new Map(),
        };
    }

    componentDidMount() {
        this.createInitialItems(COUNT_OF_ITEMS);
        this.startCreatingItems();
    }

    createInitialItems(num) {
        const items = new Map();
        for (let i = 0; i < num; i++) {
            const item = activityCreator();
            items.set(item.id, item);
            const timeToDie = Math.random() * 60000 + 60000;

            setTimeout(() => {
                items.set(item.id, {...items.get(item.id), isSend: true});
                this.setState({items});
            }, +timeToDie - 10000);

            setTimeout(() => {
                items.delete(item.id);
                this.setState({items});
            }, timeToDie);
        }
        this.setState({items});
    }

    startCreatingItems(){
        const addNewItem = () => {
            const items = this.state.items;
            if (items.size < COUNT_OF_ITEMS) {
                const item = activityCreator();

                const timeToDie = Math.random() * 60000 + 60000;
                setTimeout(() => {
                    items.set(item.id, {...items.get(item.id), isSend: true});
                    this.setState({items});
                }, +timeToDie - 10000);

                setTimeout(() => {
                    items.delete(item.id);
                    this.setState({items});
                }, timeToDie);
                items.set(item.id, item);
                this.setState({items});
            }
            setTimeout(addNewItem, Math.random() * 60000 + 60000);

        };
        setTimeout(addNewItem, Math.random() * 60000 + 60000);
    }

    deleteItem = (id) => {
        const items = this.state.items;
        items.delete(id);
        this.setState({items});
    };

    render() {
        const {isAutoSendActive, isActive} = this.props;
        const values = [...this.state.items.values()];

        return <div className={'activity__items'}>
            {values.map((activity, i) => <div key={i}
                className={isActive || (i === 0) ? 'activity__item-shell' : 'activity__item-shell js-hide-item'}><Item
                isAutoSendActive={isAutoSendActive} deleteItem={this.deleteItem}  activity={activity}/></div>)}
        </div>
    }
}