import React from 'react';

const names = {
    border :"1px solid black",
    margin: 10,
    padding: 10,
}

function Greetings({lang,children}){
    return <div style={names} >
        {langList({lang})} {children}
    </div>
    
}
function langList({lang}){

    if( lang === "de"){
        return "Hallo "
    }
    if( lang === "en"){
        return "Hello "
    }
    if(lang === "es"){
        return "Hola "
    }
    if(lang === "fr")
    {
        return "Bonjour "
    }
}
export default Greetings