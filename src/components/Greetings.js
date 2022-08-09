// const Greetings = ({ lang, children }) => {
//   let selectedLanguage = '';
//   if (lang === 'de') {
//     selectedLanguage = 'Hallo';
//   } else if (lang === 'fr') {
//     selectedLanguage = 'Bonjour';
//   }

// import { Children } from 'react';

//   return (
//     <div className="greet">
//       {selectedLanguage} {children}
//     </div>
//   );
// };

function Greetings(props) {
  //    let selectecLanguage = props.lang;
  let greeting = ' ';
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
  }

  return (
    <div className="greet">
      {greeting} {props.children}
    </div>
  );
}

export default Greetings;
