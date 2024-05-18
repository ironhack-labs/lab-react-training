import PropTypes from 'prop-types';
import "./greetings.css"


function Greeting ({lang, children}) {

    const getGreeting = (lang) => {
        switch (lang) {
          case 'de':
            return 'Hallo';
          case 'en':
            return 'Hello';
          case 'es':
            return 'Hola';
          case 'fr':
            return 'Bonjour';
          default:
            return 'Hello';
        }
      };

      return (
        <div className="greetings">
          {getGreeting(lang)} {children}
        </div>
      );


}


Greeting.propTypes = {
    lang: PropTypes.string,
    children: PropTypes.string,
    
  };

export default Greeting;

