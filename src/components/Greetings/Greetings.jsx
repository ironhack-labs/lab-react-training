
import "./Greetings.css";

function Greetings({ lang, children }) {
    let greetingText = '';

    switch (lang) {
        case 'en':
            greetingText = `Hello ${children}`;
            break;
        case 'es':
            greetingText = `Hola ${children}`;
            break;
    }

    return <h3 className="border">{greetingText}</h3>;
}

export default Greetings;