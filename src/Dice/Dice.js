import { Component } from "react";

export default class Dice extends Component {

    state = {
        click: false,
        dice: ''
    }

    clickHandler = () => {
        const newDice = Math.ceil(Math.random() * 6)
        setTimeout(() => {
            this.setState({
                dice: `public\img\dice${newDice}.png`
            })
        }, 1000);
        this.setState({
            click: true
        })
    }

    render() {
        return (
            <>
                <div onClick={() => this.clickHandler}>
                    {!this.state.click ?
                        <img src={this.state.dice} alt="Dice" /> :
                        <img src="./public/img/dice-empty.png" alt="Dice" />
                    }
                </div>
            </>
        );
    }

}
