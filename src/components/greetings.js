import React, { Component } from 'react'
import "../css/greetings.css"

export default class Greetings extends Component {
    render() {
        let greets;
        switch (this.props.lang){
            case "de":
                greets =  "hallo"
                break;
            case "fr":
                greets = "bonjour"
        }
        return (
            <div className = "greetings">
            <p>{greets} {this.props.children}</p>
            </div>
        )
    }
}