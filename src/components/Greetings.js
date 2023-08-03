const Greetings = ({lang, name}) => {

    const border = {
        border: "solid black 1px",
        padding: "5px"
    }

    if(lang === "de") {
        return <p style={border}>Hallo {name}</p>
    } else if((lang === "en")) {
        return <p style={border}>Hola {name}</p>
    } else if((lang === "en")) {
        return <p style={border}>Hello {name}</p>
    } else if((lang === "fr")) {
        return <p style={border}>Bonjour {name}</p>
    }
}

export default Greetings;