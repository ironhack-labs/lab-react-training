

function Greetings(props) {

    const { lang, children } = props

    let text = ''

    switch (lang) {
        case 'de':
            text = 'Hallo'
            break;
        case 'en':
            text = 'Hallo'
            break;
        case 'es':
            text = 'Hola'
            break;
        case 'fr':
            text = 'Bonjour'
            break;
    }


    return (
        <div>
            <p>{text} {children}</p>
        </div>
    )
}





export default Greetings