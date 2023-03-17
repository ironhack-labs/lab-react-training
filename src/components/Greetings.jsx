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
      lang = 'Hello'

  }
  return <section className="m-3 border border-1 border-dark">
    <p className="m-2">{lang} {children}</p>
  </section>

}

Greetings.defaultProps = {
  lang: '',
  children: ''
};

export default Greetings;