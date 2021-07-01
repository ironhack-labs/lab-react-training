import { Component } from 'react';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
	static defaultProps = {
		sides: [
			"one",
			"two",
			"three",
			"four",
			"five",
			"six",
		],
	};
	constructor(props) {
		super(props);
		this.state = { die1: "one", die2: "one", rolling: false };
        // we want the instance of the component to be this
		this.roll = this.roll.bind(this);
	}
	roll = e => {
        const {sides} = this.props;
        console.log('sides', sides, 'length', sides.length);
		const rolledDie1 = sides[Math.floor(Math.random() * sides.length)];
		const rolledDie2 = sides[Math.floor(Math.random() * sides.length)];
		
		this.setState({
			die1: rolledDie1,
			die2: rolledDie2,
            rolling: true,
		});
        setTimeout(() => {
            this.setState({
				rolling: false,
			});
        }, 1000);
	};
	render() {
		return (
			<article className="RollDice">
				<h2>Let's Roll!</h2>
				<div className="RollDice__wrapper">
					<Die num={this.state.die1} rolling={this.state.rolling} />
					<Die num={this.state.die2} rolling={this.state.rolling} />
				</div>
				<div>
					{/* disable onClick while rolling is true */}
					<button onClick={this.roll} disabled={this.state.rolling}>
						{this.state.rolling ? "Rolling..." : "Roll Dice!"}
					</button>
				</div>
			</article>
		);
	}
}
 
export default RollDice;