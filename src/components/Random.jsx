import React from 'react';
import './Random.css';
import { useState } from 'react';

export default function Random({ min, max }) {
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  return (
    <div className="Random">
      random value between {min} and {max} => {getRandom(min, max)}
    </div>
  );
}
