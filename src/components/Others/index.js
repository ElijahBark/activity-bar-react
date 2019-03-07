import React, {Component} from 'react'
import Popup from "./Popup";
import './style.css'

class Others extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 9,
            timeToChange: 10000
        };

    }

    render() {
        let {isPopupActive, changePopupState, isActive} = this.props;
        return <div className={isActive? 'activity__others-shell': 'activity__others-shell js-hide-others'}>
            <div onClick={changePopupState} className="activity__others">
                <Popup isPopupActive={isPopupActive} changePopupState={changePopupState} num={this.state.num}/>
                <p onClick={changePopupState}
                   className="activity__others-text text text__type_small js-others-text">Еще {this.state.num} человек
                    видит
                    ленту</p>
            </div>
        </div>
    }


    componentDidMount = () => {
        this.timer();
    };

    componentWillUnmount = () => {
        clearTimeout(this.timer);
    };

    timer = () => {
        setTimeout(() => {
            this.setState({num: Math.ceil(Math.random() * 20), timeToChange: Math.ceil(Math.random() * 20000 + 10000)});
            this.timer();
        }, this.state.timeToChange)
    };

}


export default Others;