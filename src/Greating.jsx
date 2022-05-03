const Greetings = ({ lang, children }) => {

    const result = () => {
        switch (lang) {
            case 'fr':
                return 'Bonjour'
                break
            case 'de':
                return 'Hallo'
                break
        }
    }

    return (
        <p> {lang = result()} {children}</p>
    )

}

export default Greetings