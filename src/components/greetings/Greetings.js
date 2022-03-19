import React, { Component } from "react";

class Greeting extends Component {
    
    sayHello = () => {
        switch (this.props.language) {
            case "de":
                return "Hallo";
                break;
            case "fr":
                return "Salut";
                break;
            case "es":
                return "Hola,"
                break;
            case "en":
                return "Hi";
                break;
        }
    }

    render() {
        return(
            <div>
                <h4>{`${this.sayHello()} ${this.props.children}`}</h4>
            </div>
        )
    }
}

export default Greeting