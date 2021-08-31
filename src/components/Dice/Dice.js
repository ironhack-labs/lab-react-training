import "./Dice.css"
import { Component } from "react";

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageNumber: 0
        }
    }

    randomNumer = () => {
        const random = Math.round(Math.random()*6 + 1)
        this.setState({
            imageNumber: 0
        })
        setTimeout(() => {
            this.setState({
                imageNumber: random
            })
        }, 1000)
    }

    render () {
        const randomSrc = () => {
            switch (this.state.imageNumber) {
                case 0:
                    return "/img/dice-empty.png"
                    break;
                case 1:
                    return "/img/dice1.png"
                    break;
                case 2:
                    return "/img/dice2.png"
                    break;
                case 3:
                    return "/img/dice3.png"
                    break;
                case 4:
                    return "/img/dice4.png"
                    break;
                case 5:
                    return "/img/dice5.png"
                    break;
                default:
                    return "/img/dice6.png"
                    break;
            }
        }

        return (
            <div className="Dice" onClick={this.randomNumer}>
                <img src={randomSrc()} />
            </div>
        )
    }
}

export default Dice