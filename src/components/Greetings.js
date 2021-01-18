import React from 'react';
import './Border.css';


const Greetings = props => {

	const lang = lang => {
		switch (lang) {
			case 'de':
				return 'Hallo';
				break;
			case 'en':
				return 'Hi';
				break;
			case 'es':
				return 'Hola';
				break;
			case 'fr':
				return 'Bonjour';
				break;
			default:
				return 'I am sorry! Something is wrong!';
				break;
		}
	};

	return (
		<div className="border">
			<p lang={props.lang}>{lang(props.lang)} {props.children}</p>
		</div>
	);
};


export {Greetings};