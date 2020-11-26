import React, { Component } from 'react';


class Dice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: this.getRandomNumber()
        }
    }

    getRandomNumber = () =>  {
        return 1 + Math.floor(6 * Math.random())
    }

    handleClick = () => {
        if (this.state.number) {
            this.setState({
                number: undefined
            })
            setTimeout(() => {
                this.setState({
                    number: this.getRandomNumber()
                })
            }, 1000)
        }
    }
    render() {
        let src;
        if (this.state.number)
            src = `/img/dice${this.state.number}.png`
        else 
            src = `/img/dice-empty.png`
        return (
            <img
                className="dice"
                onClick={this.handleClick}
                src={src}
                alt="Dice" />
        );
    }
}

export default Dice; 