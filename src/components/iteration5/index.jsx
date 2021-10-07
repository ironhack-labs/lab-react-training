import React from 'react';
import CreditCard from './CreditCard';

const Iteration5 = () => {
  const creditCards = [
    {
      type: 'Visa',
      number: '0123456789018845',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'BNP',
      owner: 'Maxence Bouret',
      bgColor: '#11aa99',
      color: 'white',
    },
    {
      type: 'Master Card',
      number: '0123456789010995',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'N26',
      owner: 'Maxence Bouret',
      bgColor: '#eeeeee',
      color: '#222222',
    },
    {
      type: 'Visa',
      number: '0123456789016984',
      expirationMonth: 12,
      expirationYear: 2019,
      bank: 'Name of the Bank',
      owner: 'Firstname Lastname',
      bgColor: '#ddbb55',
      color: 'white',
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <p class="text-5xl mb-12">Iteration 5</p>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {creditCards.map((card) => (
          <CreditCard {...card} />
        ))}
      </ul>
    </div>
  );
};

export default Iteration5;
