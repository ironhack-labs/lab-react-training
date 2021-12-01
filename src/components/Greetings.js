import './Greetings.css'


function Greetings(props) {

    const {lang, children} = props

    let greetings;

    switch(lang){
        case 'de': greetings = 'Hallo';
        break;
        case 'en': greetings = 'Hello';
        break;
        case 'es': greetings = 'Hola';
        break;
        case 'fr': greetings = 'Bonjour';
        break;
    }
    return (
        <div className="Greetings">
            {greetings}
            {children}
        </div>
    )
}

export default Greetings