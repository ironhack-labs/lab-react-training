// const Greetings = ({ lang, children }) => {
//   let selectedLanguage;
//   if (lang === 'de') {
//     selectedLanguage = 'Hallo';
//   } else if (lang === 'fr') {
//     selectedLanguage = 'Bonjour';
//   }

//   return (
//     <div>
//       {selectedLanguage}
//       {children}
//     </div>
//   );
// };

// export default Greetings;

const Greetings = ({ lang, children }) => {
  return (
    <div>
      {lang === 'de' ? 'Hallo ' : 'Bonjour '}
      {children}
    </div>
  );
};

export default Greetings;
