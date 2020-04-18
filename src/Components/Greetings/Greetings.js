import React, {Component} from 'react'
import './Greetings.css'

class Greetings extends Component {

    selectLang() {
        let Lang = undefined
        switch (this.props.lang) {
            case "it":
                Lang = "Ciao"
                break;
            case "de":
                Lang = "Halo"
                break;
            case "es":
                Lang = "Hola"
                break;
            case "fr":
                Lang = "Bonjour"
                break;     
            default:
                Lang= undefined
        }
        return Lang;
    }

    render(){
        return(
            <div className="greetings-container">
                <div> {this.selectLang()} {this.props.children}</div>
            </div>
        )
        
    }

}

export default Greetings;