import React, { Component } from 'react';
import './styles.scss';

class Greetings extends Component {
	render() {
		const greetings = {
			en: 'Hello',
			es: 'Hola',
			fr: 'Bonjour',
			de: 'Hallo'
		};

		const language = this.props.lang;

		return (
			<div className="Greetings">
				<p>
					{greetings[language]} {this.props.children}
				</p>
			</div>
		);
	}
}

export default Greetings;
