function Greetings(props) {
  const { lang, children } = props;
  function salute() {
    if (lang === 'de') {
      return <div className="salute">Hallo</div>;
    } else if (lang === 'en') {
      return <div className="salute">Hello</div>;
    } else if (lang === 'es') {
      return <div className="salute">Hola</div>;
    } else if (lang === 'fr') {
      return <div className="salute">Bonjour</div>;
    } else {
      return <div>Sorry</div>;
    }
  }

  return (
    <div className="IdCard">
      <p>
        {salute()} {children}
      </p>
    </div>
  );
}

export default Greetings;
