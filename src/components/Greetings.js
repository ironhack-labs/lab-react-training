import React from "react";

class Greetings extends React.Component {
    render() {
        return(
            function Greetings(props) {
        
                let greeting = "";

                switch (props.lang) {
                    case 'de':
                        greeting = 'Hallo,';
                        break;
                    case 'en':
                        greeting = 'Hallo,';
                        break;
                    case 'es':
                        greeting = 'Hallo,';
                        break;
                    case 'fr':
                        greeting = 'Hallo,';
                        break;
                    default:
                }
                
                return (
                    <h2>
                        {greeting}
                        {props.children}
                    </h2>
                )
            }
        )    
    }          
}

export default Greetings;