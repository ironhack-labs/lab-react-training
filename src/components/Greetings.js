import React, { Component } from 'react'

export default class Greetings extends Component {
  render() {
    let lang = this.props.lang;
    switch (lang) {
        case "de":
            return <div className="greetings">
                <p>Hallo {this.props.children}</p>
                </div>
        case "en":
            return <div className="greetings">
                <p>Hola {this.props.children}</p>
                </div>
        case "es":
            return <div className="greetings">
                <p>Hello {this.props.children}</p>
                </div>
        case "fr":
            return <div className="greetings">
                <p>Bonjour {this.props.children}</p>
                </div>    
        default:
            return <div className="greetings">
                <p>Bonjour {this.props.children}</p>
                </div>             
    }
  }
}
