function Greetings({ lang, children }) {
  const saying = {
    de: 'Hallo',
    fr: 'Bonjour',
    en: 'Hello',
    es: 'Hola',
  };
  return (
    <div
      style={{
        border: '2px solid',
        width: '50%',
        height: '60px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '1.5rem',
        fontWeight: 'normal',
        paddingLeft: '5px',
        marginBottom: '12px',
      }}
    >
      <h4>
        {saying[lang]} {children}
      </h4>
    </div>
  );
}

export default Greetings;
