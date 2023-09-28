/* eslint-disable react/prop-types */
const Greetings = ({ lang, children }) => {
  let greetings = "";
  switch (lang) {
    case "de":
      greetings = "Hallo";
      break;
    case "es":
      greetings = "Hola";
      break;
    case "fr":
      greetings = "Bonjour";
      break;
    default:
      greetings = "Hello";
      break;
  }
  return <div className="border border-2 border-black mb-2">{greetings} {children}</div>;
};

export default Greetings;
