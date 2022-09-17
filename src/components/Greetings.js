function Greetings(props) {
  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  return (
    <div style={{ display: 'flex', margin: '10px', border: '1px black solid' }}>
      <p>
        <strong>{greetings[props.lang]}</strong> {props.children}
      </p>
    </div>
  );
}

export default Greetings;
