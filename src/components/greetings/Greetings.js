/* import React from 'react'

class Gretings extends React.Component {
   render () {
    let greet = ''
    switch (this.props.lang) {
        case 'de':
            greet = 'Hallo';
            break;
        case 'fr':
            greet = 'Bonjour';
            break;
        case 'es':
            greet = 'Hola Mamahue';
            break;
        default: 
            greet = 'Jelouu';
    }
    return (
        <div className="containerGreeting">
            <p>{greet} {this.props.children}</p>
        </div>
    )
   }
} */

import './Greetings.css'
function Greetings (props) {
    const text = {
        de: "Hallo",
        es: 'Hola mamahue',
        en: 'Jelou',
        fr: 'Bonjour'
    }
    return (
        <div className="containerGreeting" >
       <p> {text[props.lang]} {props.children}</p> 
        </div>
    )
}  
export default Greetings 
