import React, { Component } from "react";

export default class Greetings extends Component {
    render () {
            switch(this.props.lang) {
                case "de":
                    return (
                        <div>
                            <h4>Hallo {this.props.children}</h4>
                        </div>
                    )
                case "en":
                    return (
                        <div>
                            <h4>Hello {this.props.children}</h4>
                        </div>
                    )
                case "es":
                    return (
                        <div>
                            <h4>Hola {this.props.children}</h4>
                        </div>
                    )
                case "fr":
                    return (
                        <div>
                            <h4>Bonjour {this.props.children}</h4>
                        </div>
                    )
                default:
                   
            }
    }
}