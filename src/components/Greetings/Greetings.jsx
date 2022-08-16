function Greetings(props) {
    const {lang, children} = props;
    
    switch (lang) {
       case 'de': 
       return <p>Hello {children}</p>
       break;
       case 'en':
       return <p>Hallo {children}</p>
       break;
       case 'es':
       return <p>Hola {children}</p>
       break;
       case 'fr':
       return <p>Bonjour {children}</p>
       break;
    }
}
    

export default Greetings;