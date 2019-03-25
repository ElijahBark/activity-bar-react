import React, {Component} from 'react';
import Header from './components/Header';
import './style.css';
import Others from "./components/Others";
import Items from "./components/Items";
import AutoSend from "./components/AutoSend";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
            isPopupActive: false,
            isAutoSendActive: false
        };
    }

    changeHeaderState = () => {
        this.setState({isActive: !this.state.isActive});
    };

    changePopupState = () => {
        this.setState({isPopupActive: !this.state.isPopupActive});
    };

    changeAutoSendState = () => {
        this.setState({isAutoSendActive: !this.state.isAutoSendActive});
    };

    render() {
        let {isActive, isPopupActive, isAutoSendActive} = this.state;
        let {changeHeaderState, changePopupState,changeAutoSendState} = this;

        return (
            <section className={'activity'}>
                <Header isActive={isActive} changeState={changeHeaderState}/>
                <Others isPopupActive={isPopupActive} isActive={isActive} changePopupState={changePopupState}/>
                <Items isAutoSendActive={isAutoSendActive} isActive={isActive}/>
                <AutoSend isAutoSendActive={isAutoSendActive} changeAutoSendState={changeAutoSendState}/>
            </section>
        );
    }
}

export default App;
