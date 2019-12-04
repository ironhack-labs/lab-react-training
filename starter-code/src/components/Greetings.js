import React, { useState } from 'react';

function Greetings({ language, children }) {
	const [ lang, setLang ] = useState(language);
	switch (lang) {
		case 'es':
			setLang('Hola');
			break;
		case 'de':
			setLang('Hallo');
			break;
		case 'en':
			setLang('Hello');
			break;
		case 'fr':
			setLang('Bonjour');
			break;
		default:
			break;
	}
	return (
		<div className='card-name'>
			<p>
				{lang} {children}
			</p>
		</div>
	);
}

export default Greetings;
