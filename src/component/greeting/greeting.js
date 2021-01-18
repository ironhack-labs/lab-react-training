import React from 'react';
import 'bulma/css/bulma.css';
import './greeting.css'


const Greetings = props =>{
    const greetings = {
        en: 'Hello',
        fr: 'Bonjour',
        es: 'Hola',
        de: 'Guttendag'
    }
    
    let greeting = ''
    if(props.lang in greetings){
        greeting = greetings[props.lang]
    }else{
        greeting = 'Hello, We dont have you Language!'
    }


    return(
        
        <div className='box'>
            <div className="columns">
                <div className="column">
                    <h1>{greeting} {props.children}</h1>
                </div>
            </div>
        </div>
    )
}

export {Greetings}