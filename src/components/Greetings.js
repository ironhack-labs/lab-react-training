import { Component } from "react";

class Greetings extends Component{
    render(){
        let lang = this.props.lang;
        switch (lang){

            case 'de':
                return <div className="greetings">
                       <p>Hallo {this.props.name}</p>
                       </div>;
            break;

            case 'en':
                return <div className = "greetings">
                       <p>Hello {this.props.name}</p>
                       </div>;
            break;

            case 'fr':
                return <div className = "greetings">
                       <p>Bonjour {this.props.name}</p>
                       </div>;
            break;

            case 'es':
                return <div className = "greetings">
                       <p> Hola {this.props.name}</p>                
                       </div>;
            break;

            default: 
              return <div className = "greetings">
                     <p>Hello {this.props.name}</p>
                     </div>;
        }        
    }
}

export default Greetings