import React, {Component} from 'react';
import './Greeting.css'

class Greeting extends Component {
    constructor(props){
        super(props);
        this.language = "";
        console.log(props);
    }

    changeLang = (lang) => {
        switch(lang){
            case "de":
                this.language = "Hallo";
                break;
            case "fr":
                this.language = "Bonjour";
                break;
            case "es":
                this.language = "Hola";
                break;
            case "en":
                this.language = "Hello";
                break;
            default: 
                this.language = "Hello";
                break;
        };
    }

    render() {
        this.changeLang(this.props.lang);
        return (
            <div className="greeting container">
                <p>{this.language} {this.props.children}</p>
            </div>
        )
    }
}

export default Greeting;