import React from 'react';

function Greetings({ lang, children}) {
   
     if(lang === "en"){
        return "Hello " + children
    }else if (lang === "de"){
        return "Hallo " + children
    }else if(lang === "es"){
        return "Hola" + children
    }

    return (
        <div>
            <h2>{lang}</h2>
            <h2>{children}</h2>
                    
        </div>
    )
}

export default Greetings