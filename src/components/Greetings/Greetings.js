import './Greetings.css'

const Greetings = (props) => {

    const { lang, children } = props
    console.log(props)

    if (lang === "de") {
        return <p className="greeting"> Hallo, {children} !</p>
    }
    if (lang === "es") {
        return <p className="greeting">Hola, {children} !</p>
    }
    if (lang === "fr") {
        return <p className="greeting">Bonjour, {children} !</p>
    }
    if (lang === "en") {
        return <p className="greeting">Hello, {children} !</p>
    }

}

export default Greetings