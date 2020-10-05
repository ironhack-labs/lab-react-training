import React from 'react'
import './greetings.css';


const Greetings = (props) => {
    if (props.lang === "de") {
        return <div className="greet"> Hallo {props.children}</div>    
    } else if (props.lang === "fr") {
        return <div className="greet"> Bonjour {props.children}</div> 
    } else if (props.lang === "es") {
        return <div className="greet"> Ola {props.children}</div> 
    } else if (props.lang === "en") {
        return <div className="greet"> Hi {props.children}</div> 
    }

}

export default Greetings
