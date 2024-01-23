function Greetings(props) {
  const { lang } = props;
  // console.log (lang == "de" ? "Hallo" : "")
  function checkLang(language) {
    if (language === 'de') {
      return 'Hallo';
    } else if (language === 'fr') {
      return 'Bonjour';
    }
  }
  return <p className="text-output">{checkLang(lang)} {props.children}</p>;
}
export default Greetings;