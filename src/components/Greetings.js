const Greetings = ({ lang, children }) => {
  return (
    <div className="greetings">
      <p>{lang === 'de' ? `Hallo ${children}` : undefined} </p>
      <p>{lang === 'fr' ? `Bonjour ${children}` : undefined} </p>
    </div>
  );
};

export default Greetings;
