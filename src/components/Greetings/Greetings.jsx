import './Greetings.css'
function Greetings(props) {
  function greetingLan() {
    if (props.lang === "de") {
      return "Hallo Ludwig";
    }
    else if (props.lang === "fr") {
      return "Bonjour Francais";
    }
    else if (props.lang === "es") {
      return "Hola español";
    }
    else if (props.lang === "en") {
      return "Hello english";
    }
  }
  return (
    <div className="greetingDiv">
      <p>{greetingLan()}</p>
    </div>
  );
}

export default Greetings;
