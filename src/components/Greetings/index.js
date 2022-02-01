
function Greetings(props){
    const {lang, children} = props;

    if (lang === "de") return (
        <div className="greetings"><p>Hallo {children}</p></div>
     )
    if (lang === "fr") return (
        <div className="greetings"><p>Bonjour {children}</p></div>
    )
    if (lang === "es") return (
        <div className="greetings"><p>Hola {children}</p></div>
    )
    return (
         <div className="greetings"><p>Hello {children}</p></div>
    )
}

export default Greetings;