import React from 'react';

const Greetings = props => {
	const languages = {
		de: 'Hallo',
		fr: 'Bonjour',
		pt: 'Olá'
	};
	return (
		<div className="box">
			{languages[props.lang]} {props.children}
		</div>
	);
};

export default Greetings;
