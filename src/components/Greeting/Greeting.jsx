import './Greeting.css';

const Greetings = (props) => {
  const { lang } = props;

  if (lang === 'de') {
    return (
      <div className="Greeting">
        <p>Hallo {props.children}</p>
      </div>
    );
  } else if (lang === 'fr') {
    return (
      <div className="Greeting">
        <p>Bonjour {props.children}</p>
      </div>
    );
  }

  /* return (
  (lang === 'de') && (<div className="Greeting"><p>Hallo {props.children}</p></div>)
  (lang === 'fr') && (<div className="Greeting"><p>Bonjour {props.children}</p></div>)
)
 */
};

export default Greetings;
