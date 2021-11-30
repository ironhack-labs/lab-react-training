import './Greetings.css'

function Greetings(props) {
    const {lang} = props
    let greeting = ""

  if (lang === 'de') {
    greeting = 'Hallo';
  } else if (lang === 'en') {
    greeting = 'Hello';
  } else if (lang === 'es') {
    greeting = 'Hola';
  } else if (lang === 'fr') {
    greeting = 'Bonjour';
  }

    return (
      <div className="Box">
         <p>{greeting} {props.children}!</p>
      </div>
    );
}



export default Greetings;