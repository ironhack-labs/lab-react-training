const greetings = ({ language, children }) => {
    switch (language) {
        case "de":
            children = "Hallo " + children
            break
        case "en":
            children = "Hello " + children
            break
        case "es":
            children = "Hola " + children
            break
        case "fr":
            children = "Bonjour " + children
            break
        case "ro":
            children = "Bună " + children
            break
    }
    return (
        children
    )
}

export default greetings