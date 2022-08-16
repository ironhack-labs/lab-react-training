import React from 'react'

function Greetings(props) {
    const {language, children} = props
   
    if (language === "en") {
      return <span>Hello {children}</span>;
    } else if (language === "de") {
        return <span>Hallo {children}</span>;

    } else if (language === "es") {
        return <span>Hola {children}</span>;
    } else if (language === "fr") {

        return <span>Bonjour {children}</span>;
    } else {
        return <span>Hi {children}</span>;

    }
}

export default Greetings