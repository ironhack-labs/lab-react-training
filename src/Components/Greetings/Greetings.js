
const Greetings  = props=> { 
    const { lang } = props;
    const { children } = props;
    let greet = "";

    if (lang === "de") {
        greet = "Hallo";
    } else if (lang === "fr") {
        greet = "Bonjour"
    } else if (lang === "en") {
        greet = "Hello"
    } else if (lang === "es") {
        greet = "Hola"
    };

    return (
            <p>{greet} {children}</p>
       
    )}

export default Greetings;
