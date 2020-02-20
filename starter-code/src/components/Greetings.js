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
                        props.lang == "de" ?
                        <p>Hallo  {props.children}</p>
                        :
                        props.lang == "es" ?
                        <p>Hola  {props.children}</p>
                        :
                        <p>Hello  {props.children}</p>
                    }
                    </h3>
            </div>
        </div>
    )
}

export default Greetings;