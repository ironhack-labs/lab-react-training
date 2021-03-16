import React from 'react';
import "./../styles/Greetings.css";



const Greetings = (props) => {
    console.log(props)

    let hello;
    if(props.lang === "de"){
        hello = "Hallo"
    }
    else if(props.lang === "en"){
        hello = "Hello"
    } else if(props.lang === "es"){
        hello = "Ola"
    } else if(props.lang === "fr"){
        hello = "Bonjour"
    }

    return (
        <div className="greetings">
        <p>{hello} {props.children}</p>    
        </div>
    )
}

export default Greetings

