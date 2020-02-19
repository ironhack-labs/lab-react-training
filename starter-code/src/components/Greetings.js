import React, { Component } from 'react'

export default class Greetings extends Component {
    render() {
        return (
            <div className="Greetings">
                <h3>{
                    (()=>{
                        switch(this.props.lang){
                            case 'de':
                            return 'Hallo '
                            case 'fr':
                            return 'Bonjour '
                            case 'en':
                            return 'Hello '
                            case 'es':
                            return 'Hola '
                            default:
                            return 'Hola'
                        }
                    })()
                    
                    }
                     {this.props.children}</h3>
            </div>
        )
    }
}
