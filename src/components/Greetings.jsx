function Greetings({ lang, children }) {
  let greet;
  if (lang === 'de') greet = 'Hallo';
  if (lang === 'fr') greet = 'Bonjour';
  if (lang === 'en') greet = 'Hello';
  if (lang === 'es') greet = 'Hola';
  // or switch
  // switch (lang) {
  //   case 'de':
  //     greet = 'Hallo';
  //     break;
  //   case 'en':
  //     greet = 'Hello';
  //     break;
  //   case 'fr':
  //     greet = 'Bonjour';
  //     break;
  //   case 'es':
  //     greet = 'Hola';
  //     break;
  //   default:
  //     greet = 'Hi';
  // }
  return (
    <div>
      <p className="idCard">
        {greet} {children}
        {/* or ternary */}
        {/* {lang === 'de'
          ? 'Hallo'
          : lang === 'en'
          ? 'Hello'
          : lang === 'fr'
          ? 'Bonjour'
          : lang === 'es'
          ? 'Hola'
          : 'Hi'}{' '}
        {children} */}
      </p>
    </div>
  );
}
export default Greetings;
