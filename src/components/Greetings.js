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
			break;
	}
	return (
		<div class="box">
			{language} {children}
		</div>
	);
}

export default Greetings;
