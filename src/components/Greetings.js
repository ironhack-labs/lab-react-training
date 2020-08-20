import React from 'react'



function Greetings(props) {

    let chosenLang;

    if (props.lang === "de"){
        chosenLang = "Hallo"
    } else if (props.lang === "en"){
        chosenLang = "Hello"
    } else if (props.lang === "es"){
        chosenLang = "Hola"
    } else if (props.lang === "fr"){
        chosenLang = "Bonjour"
    }

    let myStyle = {
        border: "2px solid black",
        margin: "5px",
        padding: "0px 5px"
    }

    return (        
        <div style={myStyle}>
            <p>{chosenLang} {props.children}</p>
        </div>
    )


    

}

export default Greetings;