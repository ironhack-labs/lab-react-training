import React, { Component } from "react"

class Greetings extends Component {
    state = {}
    render() {
        const { lang, name } = this.props
        const getSalutation = () => {
            switch (lang) {
                case "de":
                    return "Hallo"
                case "en":
                    return "Hello"
                case "es":
                    return "Hola"
                case "fr":
                    return "Bonjour"
                default:
                    break;
            }
        }

        return (
            <h2>{getSalutation()} {name}</h2>
        )
    }
}

export default Greetings;