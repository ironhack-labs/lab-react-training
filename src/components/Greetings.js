function Greetings( {lang, children}) {

  switch (lang) {

  case "fr":
  lang = "Bonjour";
  break;

  case "es":
  lang = "Hola";
  break;

  case "de":
  lang = 'Hallo';
  break;
    
  default :
  lang ="hello"

}
  return(
  <div className="greetingCard">
  <h3>{lang} {children}</h3>
  </div>
  )
  
}

export default Greetings;