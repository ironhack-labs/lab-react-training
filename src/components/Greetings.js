import React, { Component } from 'react';

class Greetings extends Component {
    render({lang} = this.props) {
        let greeting;
        switch(lang){
            case "de":
                greeting = "Hallo";
                break;
            case "fr":
                greeting = "Bonjour";
                break;
            case "en":
                greeting = "Hello";
                break;
            case "es":
                greeting = "Hola";
                break;
        }
        return (
            <div className="border">
                {greeting} {this.props.children}
            </div>
        );
    }
}

export default Greetings;