import React, { Component } from 'react';
import 'style.css'

export default class Header extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <header className="activity__header">
                <a href="#" className="activity__header-icon" />
                <p className="activity__header-text text">
                    Отправляйте активность<br />
                    разного рода бесплатно!
                </p>
            </header>
    }

}
