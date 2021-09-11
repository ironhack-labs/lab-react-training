import React, {Component} from 'react';
import './Greetings.css';

class Greetings extends Component {
    render(){
        const {lang, children} = this.props;
        switch (lang) {
            case 'de':
                return <div className="greetings">
                    <p>Hallo {children}</p>
                    </div>;
                break;

            case 'en':
                return <div className="greetings">
                       <p>Hello {children}</p>
                       </div>;
                break;

            case 'es':
                return <div className="greetings">
                       <p>Hola {children}</p>
                       </div>;
                break;
            
            case 'fr':
                return <div className="greetings">
                       <p>Bonjour {children}</p>
                       </div>;
                break;
        }
    }
}

export default Greetings;