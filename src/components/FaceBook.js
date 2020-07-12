import React from 'react';
import profiles from '../data/berlin.json';
import IdCard from './IdCard';

function FaceBook() {
  const idCards = profiles.map((p, index) => {
    return (
      <IdCard
        key={index}
        lastName={p.lastName}
        firstName={p.firstName}
        country={p.country}
        type={p.isStudent ? 'Student' : 'Teacher'}
        picture={p.img}
      />
    );
  });
  return <div>{idCards}</div>;
}
export default FaceBook;
