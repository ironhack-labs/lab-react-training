import './Greetings.css'

const Greetings = (props) => {
    const { lang, children } = props;
    let msg = ''
    if(lang === "fr") msg = "Bonjour"
    if(lang === "en") msg = "Hello"
    if(lang === "es") msg = "Hola"
    if(lang === "de") msg = "Hallo"
    return(
        <div className="Greetings">
            <p>{msg} {children}</p>
        </div>
    );
}

export default Greetings;