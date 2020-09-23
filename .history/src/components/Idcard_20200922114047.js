import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  const dob = props.birth
    .toString()
    .split(' ')
    .slice(0, 4)
    .join()
    .replace(/,/g, ' ');