import './Greetings.css'

const Greetings = ({ lang, children }) => {
    let salute = ''

    switch (lang) {
        case 'de':
            salute = 'Hallo'
            break;

        case 'en':
            salute = 'Hello'
            break;
        case 'es':
            salute = 'Hola'
            break;
        case 'fr':
            salute = 'Bonjour'
            break;
    }


    return (<div className="greetings">
        <h4>{salute} {children}</h4>
    </div>)



}

export default Greetings