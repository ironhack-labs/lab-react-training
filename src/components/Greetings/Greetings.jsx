import './Greetings.css'
const Greetings = ({ greetingInfo }) => {

    const { lang, children } = greetingInfo
    let gtr = ''

    if (lang === 'en') {
        gtr = 'Hello there'
    }

    if (lang === 'es') {
        gtr = 'Hola holita vecinito'
    }

    let message = gtr + ' ' + children


    return (
        <div className="message">
            <p>{message}</p>
        </div>
    )
}

export default Greetings