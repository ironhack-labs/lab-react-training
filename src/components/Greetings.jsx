import React from 'react'

function Greetings(props) {
    const {lang, children} = props;

        function chooseLanguage(language) {
            if (language === 'en') {
                return <p>Hello {children}</p>
            } else if (language === 'de') {
                return <p>Hallo {children}</p>
            } else if (language === 'es'){
                return <p>Hola {children}</p>
            } else {
                return <p>Bonjour {children}</p>
            }
        }
    
        return (
            chooseLanguage(lang)
        )
  
}

export default Greetings