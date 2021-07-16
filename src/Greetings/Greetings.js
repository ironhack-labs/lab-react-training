import { Component } from "react";
import greetingsList from "./GreetingsList";
import './Greetings.css';

class Greetings extends Component {
    render() {
        const selectLang = this.props.lang;
        return(
            <>
                <div id = 'container-greetings'>
                    <div>
                        <p>{greetingsList[selectLang]}, {this.props.children}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Greetings