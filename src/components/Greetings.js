import './Greetings.css';


const Greetings = ({ lang, children }) => {
    let selectedLanguage = ''
    if (lang === 'de') {
        selectedLanguage = "Hallo"
    } else if (lang === 'fr') {
        selectedLanguage = "Bonjour"
    }


  return <div className='greet'>{selectedLanguage} {children}</div>;
};
export default Greetings; 