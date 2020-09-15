import React, { Component } from 'react'


class Greetings extends Component {
    render(){
        let welcome = ''
        switch (this.props.lang){
            case "de":
                welcome = 'Hallo'
                break
            case "fr":
                welcome = 'Bonjour'
                break;
            default:
                return welcome
        }
        return (
            <div className='box'>
                <p>{welcome + ' ' + this.props.children}</p>
            </div>
        )
    }
}

export default Greetings