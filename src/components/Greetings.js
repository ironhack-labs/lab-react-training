import {Component} from "react";

class Greetings extends Component {
    render() {
        let lang = this.props.lang;
        switch (lang) {
            case "de":
                return<div className="greetings">
                    <p>Hallo {this.props.children}</p>
                </div>
            case "en":
                return <div className="greetings">
                    <p>Hello {this.props.children}</p>
                </div>   
             case "es":
                 return <div clasName="greetings">
                     <p>Halo {this.props.children}</p>
                 </div>   
            case "fr":
                return<div className="greeetings">
                    <p>Nonjour {this.props.children}</p>
                </div>   
            default:
                <div className="greetings">
                    <p>Hello {this.props.children}</p>
                </div>      
        }
    }
}

export default Greetings;