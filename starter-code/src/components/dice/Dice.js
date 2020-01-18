import React, { Component } from "react";
import "./Dice.css"
class Dice extends Component {
	state = {
		src: "img/dice-empty.png",
	};
	randomDiceImgonClick = event => {
		const diceImgsArr = [
			"img/dice1.png",
			"img/dice2.png",
			"img/dice3.png",
			"img/dice4.png",
			"img/dice5.png",
			"img/dice6.png",
		];

		const randomDice = diceImgsArr[Math.floor(Math.random() * diceImgsArr.length)];

		this.setState({
			src: randomDice,
		});
	
	};

	render() {
		return (
			<img
				src={this.state.src}
				onClick={this.randomDiceImgonClick}
        alt="..."
        className="dice-img"
			></img>
		);
	}
}

export default Dice;
