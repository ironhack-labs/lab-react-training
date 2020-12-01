import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
  const number = Math.round(props.children);
  return <div>{stars(number)}</div>;
};

function stars(number) {
  return '★'.repeat(number) + '☆'.repeat(5 - number);
}

Rating.propTypes = {};

export default Rating;
