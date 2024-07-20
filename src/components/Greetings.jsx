import {PropTypes} from 'prop-types';

function Greetings({lang, children}) {
    if (lang === "en") {
  return <div>hello {children}</div>;
     } else if (lang === "de") {
  return <div>hallo {children}</div>;
   }else if (lang === "fr") {
  return <div>bonjour {children}</div>;
  } else  {
  return <div>hola {children}</div>;
  }
}

Greetings.propTypes = {
    lang: PropTypes.oneOf(["de", "en", "fr", "es"]),
    children: PropTypes.object.isRequired,
}

export default Greetings;
