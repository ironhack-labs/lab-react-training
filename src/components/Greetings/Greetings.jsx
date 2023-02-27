import './Greetings.css'

const Greetings = (props) => {

    const { lang, children } = props
    let greeting

    switch (lang) {
        case 'en':
            greeting = `Hello ${children}`
            break;
        case 'es':
            greeting = `Hola ${children}`
            break;
        case 'de':
            greeting = `Hallo ${children}`
            break;
        case 'fr':
            greeting = `Bonjour ${children}`
            break;
    }

    return (
        <div className="card">
            <div className="text">
                {greeting}
            </div>
        </div>
    )
}

export default Greetings
