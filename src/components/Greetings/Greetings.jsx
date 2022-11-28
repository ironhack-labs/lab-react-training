

const Greetings = props => {

    const { lang } = props
    switch (lang) {
        case 'de':
            return <p>Hallo {props.children}</p>
            break;
        case 'fr':
            return <p>Bonjour {props.children}</p>
            break;
    }
}

export default Greetings