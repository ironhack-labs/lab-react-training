import React from 'react';
import PropTypes from 'prop-types';

function Random ({min, max}) {
    let random = Math.floor(Math.random()* (max-min +1) +min);
    return (
      <div className="randoNum">{`Random value between ${min} and ${max} => ${random}`}</div>
    );
}


Random.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
export default Random;