import { Component } from "react";

class Dice extends Component {
    state = {
        number: '-empty'
    }

    rollDice = () => {
        this.setState(() => ({
            number: Math.round(Math.random() * 5 + 1)
        }))
    }

    render() {
        const { number } = this.state;
        const { className } = this.props;
        return (
            <img
                onClick={() => this.rollDice()}
                className={`dice ${className}`} 
                src={`./img/dice${number}.png`} alt="dice"/>
        );
    }
}

export default Dice;