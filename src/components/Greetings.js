import React from 'react'

function Greetings(props) {
//console.log(props.lang)

let greeting = ''
if (props.lang === 'de') {
    greeting = 'Hallo'
}

if (props.lang === 'fr') {
    greeting = 'Bonjour'
}

    return (
        <div>

            <p>

                {greeting} {props.children}

            </p>

        </div>


    )
}
export default Greetings;

