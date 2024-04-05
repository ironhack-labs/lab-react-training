import "./Greetings.css";

function Greetings({ lang, children }) {
  let greetings;
  switch (lang) {
    case "en":
      greetings = "Hello";
      break;
    case "de":
      greetings = "Hallo";
      break;
    case "fr":
      greetings = "Bonjour";
      break;
    case "es":
      greetings = "Hola";
      break;
  }
  return (
    <div lang={lang}>
      {greetings} {children}
    </div>
  );
}

export default Greetings;
