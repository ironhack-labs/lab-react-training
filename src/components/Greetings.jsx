function Greetings({lang, children}) {
    
    return (
        <div className="greetings">
            {lang === "de" && <p>Hallo {children}</p>}
            {lang === "fr" && <p>Bonjour {children}</p>}
            {lang === "en" && <p>Hello {children}</p>}
            {lang === "es" && <p>Hola {children}</p>}
        </div>
    );

    // another option to do the same
    
    // const greetings = {
    //     de: 'Hallo',
    //     en: 'Hello',
    //     es: 'Hola',
    //     fr: 'Bonjour'
    //   };
    
    //   // Fetch the greeting based on the lang prop or default to English if not found
    //   const greeting = greetings[lang] || 'Hello';
    
    //   return (
    //     <div>{greeting} {children}</div>
    //   );
}

export default Greetings;