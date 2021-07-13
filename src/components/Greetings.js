import React from 'react';

function Greetings (props){
    return(
        
        <div className="greet">

                <div>
                    <p>Hallo {props.name}</p>
                </div>

        </div>
    )
}
export default Greetings
