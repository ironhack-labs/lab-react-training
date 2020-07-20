import React from 'react'

const Greetings = (props) => {
    function greeting(lang){
        if (lang === "de"){
            return "Hallo "
        } else if (lang === "en"){
            return "Hello " 
        } else if (lang === "es"){
            return "Halo "
        } else{
            return "Bonjour "
        }
    }
    return (
        <div style={{
            border: "2px solid black",
            fontSize: "25px",
            width: "500px",
            margin:"20px 50px", 
            textAlign: "left"
        }}>
            <p>{greeting(props.lang)} {props.children}</p>
        </div>
    )
}

export default Greetings
