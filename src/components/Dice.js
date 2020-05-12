import React, { Component } from "react";

export default class Dice extends Component {
    
    state = {
        currentTimeoutId: 0
    }

    constructor() {
        super();
        this.image = React.createRef();
        // Crea y liga la referencia al handler
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = () => {
        this.image.current.src = "./img/dice-empty.png";
        if (this.state.currentTimeoutId > 0) clearInterval(this.state.currentTimeoutId);
        const currentTimeoutId = setTimeout(() => {
            this.setState({ currentTimeoutId: 0 })
            this.updateDice();
        }, 1000);
        this.setState({ currentTimeoutId });
    }

    updateDice = () => {
        const rand = 1 + Math.floor(Math.random() * 6);
        this.image.current.src = `./img/dice${rand}.png`;
    }

    render() {
        const style = {
            width: "200px"
        }
        return (
            <div>
                <img ref={this.image} onClick={ this.clickHandler } src="./img/dice-empty.png" alt="empty" style={style} />
            </div>
        );
    }
}