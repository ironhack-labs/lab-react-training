import React from 'react';
import { iter1Data } from '../../data/iter1Data';
import { IdCard } from './IdCard/IdCard';

const Iteration1 = () => {
  return (
    <div className="container overflow-hidden">
      <div className="row gx-5">
        {iter1Data.map((card, index) => {
          return <IdCard key={index} {...card} />;
        })}
      </div>
    </div>
  );
};


export { Iteration1 }