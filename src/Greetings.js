import React from 'react';
import PropTypes from 'prop-types';

function Greetings({lang, children}) {
    let greetings = "";
    if (lang === "de") {
        greetings = "Hallo";
    } else if (lang === "es") {
        greetings ="Hola"
    }

    return (
        <div className="greet">
        <p className="eachGreet">{greetings} {children}</p>
        </div>
    );
}

Greetings.propTypes = {
  lang: PropTypes.string,
  children: PropTypes.string
};

export default Greetings;