import React from 'react'


const Greetings = (props) =>{

    if (props.lang=="de") {
        return(
        <h2>Hallo {props.children}</h2>
        )

    }else if(props.lang=="fr"){
        return(
        <h2>Bonjour {props.children}</h2>
        )

    }else if(props.lang=="en"){
        return(
        <h2>Hello {props.children}</h2>
        )
        
    }else if(props.lang=="pt"){
        return(
        <h2>Olá {props.children}</h2>
        )
    }
}

export default Greetings