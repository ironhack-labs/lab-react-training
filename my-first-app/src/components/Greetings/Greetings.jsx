import './Greetings.css'
const Greetings = ({ lang, children }) => {
    const renderSwitch = (lang) => {
        switch (lang) {
            case 'de':
                return 'Hallo'
            case 'fr':
                return 'Bonjour'
            case 'es':
                return 'Hola'
            case 'en':
                return 'Hello'
        }
    }


    return (
        <h1>{renderSwitch(lang)} {children}</h1>
    )
}
export default Greetings