import React from 'react'

const Greetings = (props) => {
    function sayHello() {
        if (props.lang === 'fr'){
            return "Bonjour"
        } else if (props.lang === 'de'){
            return "Hallo" 
            }
                else if(props.lang === 'es'){
                    return "Holà"
                } else if(props.lang === 'en'){
                    return "Hello"
                }
        }

    return (
        <div className="greetings">
        {sayHello()} {props.children}
        </div>
    )
}

export default Greetings
