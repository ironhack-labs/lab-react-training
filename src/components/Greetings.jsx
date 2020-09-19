import React from 'react'
import './Greetings.css'

function chooseGreeting(lang) {

    if( lang === 'es') {
        return 'Hola';
    } else if (lang === 'de') {
        return 'Hallo';
    } else if (lang === 'en') {
        return 'Hello'
    } else if (lang === 'fr') {
        return 'Bonjour'
    }
}

class Greetings extends React.Component {
    constructor(props) {
        super(props)
    }

  
        render (){
            return (
                <>
                <p className='greetings'>{chooseGreeting(this.props.lang)} {this.props.children}</p>
            </>
            )
    };
}

export default Greetings;