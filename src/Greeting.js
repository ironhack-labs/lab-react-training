import './Greeting.css'

const Greeting = ({lang, firstName}) => {
    const greetings = {
        fr: 'Bonjour',
        en: `S'up`,
        de: 'Hallo',
        es: 'Hola'
    }
    return (
        <div className = "Greeting">
            {greetings[lang]} I'm {firstName}
        </div>
    )
}

export default Greeting;