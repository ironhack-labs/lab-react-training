import PropTypes from "prop-types";

function Greetings({ lang, children }) {
  let greeting;
  switch (lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "es":
      greeting = "Ola";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    default:
      greeting = "Hello";
  }

  return (
    <div>
      <p>
        {greeting} {children}
      </p>
    </div>
  );
}

Greetings.propTypes = {
  lang: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Greetings;
