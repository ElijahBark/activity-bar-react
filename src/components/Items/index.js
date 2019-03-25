import React, {Component} from 'react';
import {activityCreator, makeTimeInterval} from '../../tools';
import {COUNT_OF_ITEMS} from '../../config';
import items from  './items.module.css';
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
            this.createSingleItem(items);
        }
        this.setState({items});
    }

    startCreatingItems(){
        const addNewItem = () => {
            const items = this.state.items;
            if (items.size < COUNT_OF_ITEMS) {
                this.createSingleItem(items);
                this.setState({items});
            }
            setTimeout(addNewItem, makeTimeInterval(60000,60000));

        };
        setTimeout(addNewItem, makeTimeInterval(60000,60000));
    }

    createSingleItem = (items) => {
        const item = activityCreator();
        items.set(item.id, item);
        const timeToDie = makeTimeInterval(60000,60000);

        setTimeout(() => {
            if(items.get(item.id)) {
                items.set(item.id, {...items.get(item.id), isSend: true});
            }
            this.setState({items});
        }, +timeToDie - 10000);

        setTimeout(() => {
            items.delete(item.id);
            this.setState({items});
        }, timeToDie);
    };

    deleteItem = (id) => {
        const items = this.state.items;
        items.delete(id);
        this.setState({items});
    };

    render() {
        const {isAutoSendActive, isActive} = this.props;
        const values = [...this.state.items.values()];

        return <div>
                    {values.map((activity, i) =>
                        <div key={i} className={isActive || (i === 0) ? items.shell :`${items.shell} ${items.hide}`}>
                            <Item isAutoSendActive={isAutoSendActive} deleteItem={this.deleteItem}  activity={activity}/>
                        </div>)}
                </div>
    }
}