function Greeting ({ lang, children }) {

    
    let language = '';
    if(lang === 'de'){
        language = 'Hallo'
    } else if (lang === 'en') {
        language = 'Hi'
    } else if (lang === 'es'){
        language = 'Holla'
    } else if (lang === 'fr'){
        language = 'Bonjour'
    }
    return(
        <div className="Greeting">
            <p> {language} {children} </p>
        </div>
    );
};

export default Greeting