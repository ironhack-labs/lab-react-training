import React, {Component} from 'react';
import './Dice.css';

class Dice extends Component {

	state = {
		pictures: [
			'/img/dice1.png',
			'/img/dice2.png',
			'/img/dice3.png',
			'/img/dice4.png',
			'/img/dice5.png',
			'/img/dice6.png'
		],
		showDice: ''
	};

	changeDice = () => {
		const newPicture = this.state.pictures[Math.floor(Math.random() * (this.state.pictures.length + 1))];

		this.setState({
			showDice: '/img/dice-empty.png'
		});
		setTimeout(() => {
			this.setState({
				showDice: newPicture
			});
		}, 1000);
	};

	render() {
		return (
			<div>
				<img
					className="dice"
					src={this.state.showDice ? this.state.showDice : this.state.pictures[Math.floor(Math.random() * (this.state.pictures.length + 1))]}
					onClick={this.changeDice}
					alt=""/>

			</div>
		);
	}
}

export default Dice;