import React from 'react'
import PropTypes from 'prop-types';
import './components.css'




export default function Greetings(props){

    Greetings.propTypes = {
        name: PropTypes.string,
        lang: PropTypes.oneOf([
            {"de": "Hallo"},
            {"en": "Hello"},
            {"es": "Hola"},
            {"fr": "Bonjour"}
        ])
    }


    function countryGreeting () => {
        props.lang.filter(function() {
            return 
        })

    }

    return ( 
        <div className = "greetings-container">
                
            <p>{props.lang} {props.name}</p>
          


        </div>
    )
}


