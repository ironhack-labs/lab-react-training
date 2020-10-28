import React from 'react';
import './Random.css';

const Random = ({min, max}) => <div className="container">Random value between {min} and {max} => {Math.floor(Math.random() * (max - min) + min)}</div>

export default Random;