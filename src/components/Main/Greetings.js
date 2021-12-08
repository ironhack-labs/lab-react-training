const language = ['de', 'en', 'es', 'fr'];
let hello = ['Hallo', 'Hi', 'Arre', 'Bonjour'];
let findLang = 0;
let word = '';

const Greetings = ({ lang, children }) => {
  findLang = language.indexOf(lang);
  word = hello[findLang];
  return (
    <>
      <div style={{ borderStyle: 'solid', margin: 5, textAlign: 'left' }}>
        <p>
          {word}, {children}
        </p>
      </div>
    </>
  );
};

export default Greetings;
