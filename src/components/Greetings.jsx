import React from 'react'


function Greetings(props) {
    const {lang, children} = props;

    let language = () => {
       
        switch (lang) {
            case 'de': 
            return 'Hallo';
    
            case 'en': 
            return 'Hello';
         
            case 'es': 
            return 'Ola';
    
            case 'fr': 
            return 'Bonjour';
           
            default:
                 return 'Hi';
        }
    }
    
  return (
    
    <div>
      <p>{language(lang)}</p>
      <p>{children}</p>
    </div>
  )
}


export default Greetings