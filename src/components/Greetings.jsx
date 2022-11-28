const Greetings = props => {
    const { lang } = props

    const language = x => {
        switch (x) {
            case 'en':
                return 'hello';
                break;
            case 'fr':
                return 'Bonjour'
                break;
            case 'es':
                return 'Hola'
                break;
            case 'de':
                return 'Hallo'
                break;
        }
    }
    return (
        <div className="Greetings">
            <p className="lang">{language(lang)}</p>
            <p className="children">{props.children}</p>
        </div>
    )

}
export default Greetings