import React from 'react';
import PropTypes from 'prop-types';




function Greetings({ lang, children }) {
    
        let greeting = '';
        if (lang === "de") {
            greeting = 'Hallo';
        } else if (lang === "fr") {
            greeting = 'Bonjour';
        }
      

    return (
        <>
            <p>{greeting} {children}
            </p>
        </>
    )
}



Greetings.propTypes = {
    lang: PropTypes.oneOf(['de', 'en', 'es', 'fr']),
    children: PropTypes.string
}



export default Greetings;