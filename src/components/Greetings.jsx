function Greetings({ lang, children }) {
  const getLang = () => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      case 'es':
        return 'Hola';
      case 'en':
        return 'Hello';
      default:
        break;
    }
  };
  return (
    <div>
      <div className="card fs-4 w-50 border border-3 border-dark m-3 p-3">
        {getLang(lang)} {children}
      </div>
    </div>
  );
}

export default Greetings;
