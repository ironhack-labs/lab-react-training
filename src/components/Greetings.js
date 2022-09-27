const Greetings = (props) => {
  if (props.lang === 'de') {
    return <h3 className="greeting-text">Hallo {props.children}</h3>;
  } else if (props.lang === 'fr') {
    return <h3 className="greeting-text">Bonjour {props.children}</h3>;
  }
};

export default Greetings;
