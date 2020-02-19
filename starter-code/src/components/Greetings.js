import React from 'react';

const Greetings = props => {
    return (
        <div className = "greetings">
            <div>
                <h3> 
                    {
                    props.lang == "fr" ? 
                        <p>Bonjour  {props.children}</p>
                        :
                        <p>Hallo  {props.children}</p>
                    }
                    </h3>
            </div>
        </div>
    )
}

export default Greetings;