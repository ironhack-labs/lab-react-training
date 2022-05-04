const Greetings = ({ lang, children }) => {
    let languaje

    if (lang === "en") {
        languaje = "hello"
    } else languaje = "hola"
    return (<div>
        <p>{languaje} {children}</p>
    </div>)
}

export default Greetings