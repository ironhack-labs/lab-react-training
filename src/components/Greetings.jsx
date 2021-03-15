import React from 'react'

const Greetings = (props) => {
    let greet = "";
    switch (props.lang){
                case "de":
                    greet="Hallo"    
                break;
                case "fr":
                    greet="Bonjour"    
                break;
                case "en":
                    greet="Hello"    
                break;
                case "es":
                    greet="Hola"    
                break;
            }
    return (
        
        <div>
        <p className="basic-border">{greet} {props.children}</p>
        </div>
    )
}

export default Greetings
