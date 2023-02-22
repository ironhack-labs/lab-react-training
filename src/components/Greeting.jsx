import React from "react";

const Greetings = (props) =>{

    const { lang, children } = props

    if (lang === "de"){
        return <div className="divLang">
        <p> Hallo {children}</p>
    </div>
    } else {
        return (
            <div>
                <p> Bonjour {children }</p>
            </div>
        )}
    
}

export default Greetings