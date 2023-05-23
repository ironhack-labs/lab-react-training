import React from "react";
import './index.css'

const Greetings = ({lang, children}) =>{
    if(lang == "de"){
        return <p className="greeting">Hallo ${children}</p>
    } else if (lang == "en"){
        return <p className="greeting">Hello ${children}</p>
    } else if(lang == 'es'){
        return <p className="greeting">Holla ${children}</p>
    } else if(lang == 'fr'){
        return <p className="greeting">Bonjour ${children}</p>
    }
}

export default Greetings;