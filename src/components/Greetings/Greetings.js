import "./Greetings.css"
import { Component } from "react"

class Greetings extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        if (this.props.lang == "es") {
            return (
                <div className="greetings">
                    <p>Hola {this.props.children}</p>
                </div>
            )
        } else if (this.props.lang == "de") {
            return (
                <div className="greetings">
                    <p>Hallo {this.props.children}</p>
                </div>
            )
        } else if (this.props.lang =="fr") {
            return (
                <div className="greetings">
                    <p>Bonjour {this.props.children}</p>
                </div>
            )
        } else {
            return (
                <div className="greetings">
                    <p>Hello {this.props.children}</p>
                </div>
            )
        }
    }
}

export default Greetings