import './Greetings.css'

function Greetings (props) {
    const { lang, children } = props;
    return (
        <div className="Greetings">
            {lang === "en" && <p>Hello {children}</p>}
            {lang === "de" && <p>Hallo {children}</p>}
            {lang === "fr" && <p>Bonjour {children}</p>}
            {lang === "es" && <p>Hola {children}</p>}
        </div>
    )
}
export default Greetings; 