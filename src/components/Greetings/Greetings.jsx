

const Greetings = props => {
    const { lang } = props
    switch (lang) {
        case 'de':
            return <p className='container'>Hallo {props.children}</p>

            break;
        case 'fr':
            return <p className='container'>Bonjour {props.children}</p>
            break;
    }
}

export default Greetings