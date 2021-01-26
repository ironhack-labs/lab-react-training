import React from "react"
import '../components/Dice.css'

class Dice extends React.Component {
    state = {
        dice: "-empty"
    }

    handleClick = () => {
        let randomDice = Math.floor(Math.random() * 6) 
        this.setState({dice: "-empty"})
        setTimeout(() => {this.setState({dice: randomDice})}, 1000)
    }

    render () {
        return (
            <div className = "diceContainer" >
                <img className = "dice" onClick={this.handleClick} src={"./img/dice" + this.state.dice + ".png"}/>
            </div>
        )
    }
}

export default Dice