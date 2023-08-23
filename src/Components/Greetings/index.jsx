/* eslint-disable react/prop-types */

const Greetings = ({ lang, children }) => {
  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour'
  };
  const greeting = greetings[lang] || greetings['en'];
  return (
    <div className="Greetings">
      {greeting}, {children}!
    </div>
  );
};
export default Greetings;