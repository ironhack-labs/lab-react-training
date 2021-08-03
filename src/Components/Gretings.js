import React, {Component} from 'react'

class Greetings extends Component{
    render(){
        let language = '';

        if(this.props.lang === 'de'){
            language = 'Hallo'
        } else if (this.props.lang === 'en') {
            language =  'Hello'
        } else if (this.props.lang === 'es') {
             language = 'Hola'
        } else if (this.props.lang === 'fr') {
            language =  'Bonjour'
        }

        return(
            <>
              <h1>{language} {this.props.children}</h1>                          
            </>
        )
    }
}

export default Greetings