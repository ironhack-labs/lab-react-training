

const Greetings = ({ lang, children }) => {
    let selectedLanguage = ''
    if (lang === 'de') {
        selectedLanguage = "Hallo"
    } else if (lang === 'fr') {
        selectedLanguage = "Bonjour"
    }
    else if (lang === 'en') {
    selectedLanguage = "Hello"
    }
    else if (lang === 'es') {
    selectedLanguage = "Holla"
    }


  return <div className='greet'>{selectedLanguage} {children}</div>;
};
export default Greetings;

