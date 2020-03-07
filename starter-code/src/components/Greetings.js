import React from "react";
import '../styles/Greetings.css';

function Greetings(props) {

    const language = props.lang;

    if(language == 'en') {
    return (
        <div className="greetingsContainer">
            <p>Hello Customer</p>
        </div>
    );
    }

    if(language == 'de') {
        return (
            <div className="greetingsContainer">
                <p>Hallo Customer</p>
            </div>
        );
    }
}
  
  export default Greetings;
  
