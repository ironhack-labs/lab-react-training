import './Greetings.css'

function Greetings(props) {

    
    function langGreeting() {
        switch (props.lang) {
            case "de":
                return "Hallo";
            case "fr":
                return "Bonjour";
            case "en":
                return "Hello";
            case "es":
                return "Holla";
            default:
                break;
        }
    }

    return (
      <div className='card'>
        <h1> {langGreeting()} {props.children} </h1>
      </div>
    );
}

export default Greetings;