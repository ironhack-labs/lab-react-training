import React from 'react'

class Greetings extends React.Component{
    checkLang(){
        switch (this.props.lang){
            case "de":
                return 'Hallo'
            case "es":
                return "Hola"
            case "fr": 
                return "Bonjour"
            case "en": 
                return "Hello"
        }
    }

    render(){
        return (
            <div className="box">
                <p className="greet">{this.checkLang()} {this.props.children}</p>
            </div>
        )
    }
}

export default Greetings