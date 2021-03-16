import React from 'react'

const Greetings = (props) => {
    let style={
        border : "1px solid black", 
        margin: 5, 
        padding : 5
    }
    if (props.lang==="de"){
        return (
            <div style={style}>
            Hallo {props.children}
            </div>
        )
    } else if (props.lang==="fr"){
        return (
            <div style={style}>
            Bonjour {props.children}
            </div>
        ) 
    }
    
}

export default Greetings
