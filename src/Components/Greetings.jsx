import React, {
    Component
} from "react"

class Greetings extends Component {
    render() {
        let greetings;
        switch (this.props.lang) {
            case "de":
                greetings = "Hallo"
                break;
            case "fr":
                greetings = "Bonjour";
                break;
            case "es":
                greetings = "Hola"
                break;
            default:
                greetings = "Hello"
                break;

        }
        return (
            <div className="Greetings">
                <p>{greetings} {this.props.children}</p>
            </div>
        )
    }
}

export default Greetings