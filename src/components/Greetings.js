import React, { Component } from 'react';

const greeting = {
	de: 'Hallo',
	en: 'Hello',
	es: 'Hola',
	fr: 'Bonjour'
};

class Greetings extends Component {
	render() {
		const { lang, children } = this.props;
		return (
			<div>
				{greeting[lang]} {children}
			</div>
		);
	}
}

export default Greetings;
