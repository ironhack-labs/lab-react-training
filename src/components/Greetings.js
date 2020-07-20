import React from 'react'

 function Greetings(props) {

    let helloWorld = "Hello"
    if(props.lang === "pt"){
        helloWorld="Ola"
    }else if(props.lang === "es"){
        helloWorld="Hola"
    }
    return (
        <div className="myCardGre">
            <h1>{helloWorld} {props.children}</h1>
        </div>
    )
    }
  

export default Greetings