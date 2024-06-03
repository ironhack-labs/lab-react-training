const Greetings = ({ lang, children }) => {
  let text = "";
  switch (lang) {
    case "de":
      text = "Hallo";
      break;
    case "en":
      text = "Hello";
      break;
    case "es":
      text = "Hola";
      break;
    case "fr":
      text = "Bonjour";
      break;
    default:
      break;
  }
  return <div className="border border-2 col-md-6 p-2 m-auto">{text} {children}</div>;
};

export default Greetings;
