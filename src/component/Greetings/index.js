import './GreetingsStyle.css'
const Greetings = (props) => {
    const { lang, children }= props;

    let msg =''
    if(lang === "de") msg = "Hallo"
    if(lang === "en") msg = "Hello"
    if(lang === "es") msg = "Hola"
    if(lang === "fr") msg = "Bonjour"
    
    return(
        <div className="Greetings">
            <p>{msg} {children}</p>
        </div>
    )

}

export default Greetings;