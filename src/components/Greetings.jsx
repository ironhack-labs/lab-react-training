import PropTypes from 'prop-types';

function Greetings(props) {
    let wordDisplayed = "";

    switch(props.lang) {
        case "de":
            wordDisplayed = "Hallo";
            break;
        case "en":
            wordDisplayed = "Hello";
            break;
        case "es":
            wordDisplayed = "Hola";
            break;
        case "fr":
            wordDisplayed = "Bonjour";
            break;
    }
    
    return (
        <div>
            <p>{wordDisplayed} {props.children}</p>
        </div>
    )
}

Greetings.propTypes = {
    lang: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default Greetings;