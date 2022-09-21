import React, { Component } from "react"
import dice0 from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

class Dice extends Component {
    state = {
        image: dice6
    }

    randomPic = () => {
        const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]
        const randomN = Math.floor(Math.random() * (diceArr.length))
        const randomDice = diceArr[randomN]

        this.setState((prevState) => {
            return {
              image: randomDice
            }
        })
    }

    changeImg = () => {
        setTimeout(this.randomPic, 500)
        this.setState((prevState) => {
            return {
              image: dice0
            }
        })
    }

    render() {
        return (
            <div className="dice-container">
                <img src={this.state.image} onClick={this.changeImg} alt="" width="100px" />
            </div>
        )
    }
}

export default Dice