import React from 'react';
import IdCard from './IdCard';
import profiles from '../data/berlin.json';

export default function Facebook() {
  return (
    <>
      {profiles.map((p, idx) => {
        return (
          <IdCard
            key={idx}
            firstName={p.firstName}
            lastName={p.lastName}
            picture={p.img}
          />
        );
      })}
    </>
  );
}
