import React from 'react';

function Greetings (props){

    let greet;

    if(props.lang === "de" ){
        greet = "Hallo"
    }else{
        greet = "Bonjour"
    }

    return(
        
        <div className="greet">

                <div>
                    <p>{greet} {props.children}</p>
                </div>

        </div>
    )
}
export default Greetings
