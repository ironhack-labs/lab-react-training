import React from 'react';
import IdCard from './idCard';

const Iteration1 = () => {
  const idCards = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      lastName: 'Delores ',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date('1988-05-11'),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <p class="text-5xl mb-12">Iteration 1</p>
      <ul className="space-y-3">
        {idCards.map((person) => (
          <IdCard {...person} />
        ))}
      </ul>
    </div>
  );
};

export default Iteration1;
