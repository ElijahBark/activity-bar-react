import React, {Component} from 'react';
import Popup from "./Popup";
import others from './others.module.css';

class Others extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 9,
            timeToChange: 10000
        };

    }

    render() {
        const {isPopupActive, changePopupState, isActive} = this.props;
        return <div className={isActive? others.shell: `${others.shell} ${others.hide}`}>
            <div onClick={changePopupState} className={others.main}>
                {isPopupActive? <Popup changePopupState={changePopupState} num={this.state.num}/>: null}
                <p onClick={changePopupState}
                   className={`${others.text} text text__type_small`}>Еще {this.state.num} человек
                    видит
                    ленту</p>
            </div>
        </div>
    }


    componentDidMount = () => {
        this.timer();
    };


    timer = () => {
        setTimeout(() => {
            this.setState({num: Math.ceil(Math.random() * 20), timeToChange: Math.ceil(Math.random() * 20000 + 10000)});
            this.timer();
        }, this.state.timeToChange)
    };

}


export default Others;