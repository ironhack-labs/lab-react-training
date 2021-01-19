import React from 'react'
import '../components/Greeting.css'

class Greeting extends React.Component {
    render() {
        
            let greet = "";

            switch (this.props.lang) {
                case 'de':
                    greet = 'Hallo';
                    break;
                case 'en':
                    greet = 'Hello';
                    break;
                case 'es':
                    greet = 'Hola';
                    break;
                case 'fr':
                    greet = 'Bonjour';
                    break;
            }

         return (
             <div>
                <p>{`${greet}, ${this.props.children}`}</p>
             </div>
         )
            
    }
}    

export default Greeting;