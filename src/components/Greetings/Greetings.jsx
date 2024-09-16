import './Greetings.css'

const Greetings = ({ lang, children }) => {

    let greet

    if (lang === 'es') {
        greet = 'Hola '
    }

    if (lang === 'en') {
        greet = 'Hello '
    }

    const textGreet = greet + " " + children

    return (
        <div className="TextGreet">
            <p>{textGreet}</p>
        </div>
    )
}
export default Greetings