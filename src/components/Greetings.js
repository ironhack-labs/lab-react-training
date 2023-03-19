function Greetings({ lang, children }) {
  switch (lang) {
    case "de":
      lang = "Hallo";
      break;
    case "en":
      lang = "Hello";
      break;
    case "es":
      lang = "Hola";
      break;
    case "fr":
      lang = "Bonjour";
      break;
    default:
      lang = "Hello";
  }

  return (
    <div className="border border border-dark m-2 text-start">
      <p className="m-2">{lang} {children}</p>
    </div>
  )
};

//Duda para Cristian: ¿En este caso, tiene más sentido definir el idioma por defecto en defaultProps o en el switch? ¿O en los dos como lo he dejado? ¿Implica alguna diferencia? Graciaas <3
Greetings.defaultProps = {
  lang: "Hello",
  children: ""
};

export default Greetings;