import React from 'react'

const Greetings = (props) => {
    const langs = {
        fr: "Bonjour",
        de: "Hallo",
        en: "Hey",
        es:"Hola"
    } 
    
    return (
       
        <div>
           <p> {langs[props.lang]}  {props.children}</p>

        </div>
    )

    //return <div>{props.lang === "fr" ? <p>Bonjour {props.children}</p> : <p>Hallo {props.children}</p>}</div>;
}

export default Greetings
