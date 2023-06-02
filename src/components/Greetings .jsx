function Greetings(props) {
  console.log(props);

  if (props.lang === 'de') {
    return (
      <div className="language-card">
        <p>Hallo {props.children}</p>
      </div>
    );
  } else if (props.lang === 'fr') {
    return (
      <div className="language-card">
        <p>Bonjour {props.children}</p>
      </div>
    );
  } else if (props.lang === 'es') {
    return (
      <div className="language-card">
        <p>Ola {props.children}</p>
      </div>
    );
  } else if (props.lang === 'en') {
    return (
      <div className="language-card">
        <p>Hello {props.children}</p>
      </div>
    );
  }
}

export default Greetings;
