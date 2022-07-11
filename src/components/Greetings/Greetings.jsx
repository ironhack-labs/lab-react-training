import "./Greetings.css"

const IdCard = ({ lang, children }) => {

    switch (lang) {
        case 'de':
            return < p className="greetings"> Hallo {children}</p >;
            break;
        case 'en':
            return <p className="greetings">Hello {children}</p>;
            break;
        case 'fr':
            return <p className="greetings">Bonjour {children}</p>;
            break;
        case 'es':
            return <p className="greetings">Hola {children}</p>
            break;



    }



}

export default IdCard;