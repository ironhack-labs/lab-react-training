import React from 'react';
import PropTypes from 'prop-types';

const Random = (props) => {
  const randomN = Math.floor(Math.random() * props.max + props.min);

  return (
    <div class="random-value">
      Random value between {props.max} and {props.min}=> {randomN}
    </div>
  );
};

Random.propTypes = {};

export default Random;
