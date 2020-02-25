import React, { Component } from "react"


class Dice extends Component {
	state = {
		src: "img/dice-empty.png",
    }
    

	randomDiceImgonClick = event => {

        setTimeout(() => {
            const diceImgsArr = [
                "img/dice1.png",
                "img/dice2.png",
                "img/dice3.png",
                "img/dice4.png",
                "img/dice5.png",
                "img/dice6.png",
            ]
    
            const randomDice = diceImgsArr[Math.floor(Math.random() * diceImgsArr.length)]
    
            this.setState({
                src: randomDice,
            })

        }, 1000)
		

	}

	render() {
		return (
			<img
                className="dice-img"
				src={this.state.src}
				onClick={this.randomDiceImgonClick}
                alt="..."
			></img>
		);
	}
}

export default Dice;