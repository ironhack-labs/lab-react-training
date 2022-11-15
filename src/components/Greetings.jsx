import React from "react";


function Greetings(props){
    const {lang, children} = props
    function checkLang(lang){
        if(lang === "en"){
            return "Hello"
        } else if(lang === "de"){
            return "Hallo"
        } else if(lang === "fr"){
            return "Bounjour"
        } else{
            return "Hola"
        }
    }
    return(
        <div>
            <p className="greetings">{checkLang(lang)} {children}</p>
        </div>
    )
}

export default Greetings