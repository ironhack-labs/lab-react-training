const Greetings = ({ lang, children }) => {
  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };
  const greetingText = greetings[lang] || greetings["en"]; // Default to English if lang is not recognized
  return (
    <div className="greeting">
      {greetingText}, {children}!
    </div>
  );
};
export default Greetings;
