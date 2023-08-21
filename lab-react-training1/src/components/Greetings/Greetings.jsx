import './Greetings.css'

const Greetings = ({ lang, children }) => {
	const renderSwitch = lang => {
		switch (lang) {
			case 'de':
				return 'Hallo'
			case 'en':
				return 'Hello'
			case 'es':
				return 'Hola'
			case 'fr':
				return 'Bonjour'
		}
	}

	return (
		<>
			<p className='frame'>
				{renderSwitch(lang)} {children}
			</p>
		</>
	)
}

export default Greetings
