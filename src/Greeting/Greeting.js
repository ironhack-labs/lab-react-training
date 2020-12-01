import React from 'react';
import PropTypes from 'prop-types';

const Greeting = (props) => {
  if (props.lang === 'de') {
    return <div class="greeting">Hallo {props.children}</div>;
  }

  if (props.lang === 'fr') {
    return <div class="greeting">Bonjour {props.children}</div>;
  }
};

Greeting.propTypes = {};

export default Greeting;
