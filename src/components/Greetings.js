const Greetings = (props) => {

    const { lang, name } = props;

    if(lang === "de") {
        return <p>Hallo {name}</p>
    } else if((lang === "en")) {
        return <p>Hola {name}</p>
    } else if((lang === "en")) {
        return <p>Hello {name}</p>
    } else if((lang === "fr")) {
        return <p>Bonjour {name}</p>
    }
}

export default Greetings;