function Greetings({ lang, children, className }) {
	let language;
	switch (lang) {
		case 'de':
			language = 'Hallo';
			break;
		case 'fr':
			language = 'Bonjour';
			break;
		case 'es':
			language = 'Hola';
			break;
		default:
			language = 'Hello';
	}
	return (
		<Panel className={className}>
			{language} {children}
		</Panel>
	);
}

export default Greetings;
