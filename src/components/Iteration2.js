import React, {Component} from 'react';
/*
class Greetings extends Component {
    render({children}=this.props){
        switch(this.props.lang) {
            case "de": return <div class="greetings"><p>Hallo {this.props.children}</p></div>; break;
            case "en": return <div class="greetings"><p>Hello {this.props.children}</p></div>;break;
            case "es": return <div class="greetings"><p>Hola {this.props.children}</p></div>;break;
            case "fe": return <div class="greetings"><p>Bonjour {this.props.children}</p></div>;break;
        }

    }
}
*/

const Greetings = (props) => {
    let text;
    switch(props.lang) {
        case "de": text = <p>Hallo {props.children}</p>; break;
        case "en": text = <p>Hello {props.children}</p>;break;
        case "es": text = <p>Hola {props.children}</p>;break;
        case "fr": text = <p>Bonjour {props.children}</p>;break;
    }
    return (
        <div class = "box">
            {text}
        </div>
    )
}
export default Greetings;