import React from 'react'

 function Greetings (props) {

    let helloWord= "Hello"
    if (props.lang ==="de"){
        helloWord ="Hallo"
    }else if (props.lang ==="es"){
        helloWord ="Hola"
    }else if (props.lang ==="fr"){
        helloWord ="Bonjour"
    }
    
    return (
        <div>
           <h3>{helloWord} {props.children}</h3> 
        </div>
    )
}

export default Greetings
