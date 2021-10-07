import React from 'react';
import Greetings from './Greetings';

const Iteration2 = () => {
  const languages = ['en', 'es', 'fr', 'de'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <p className="text-5xl mb-12">Iteration 2</p>

      <ul className="space-y-3">
        {languages.map((lang, i) => (
          <Greetings key={i} lang={lang}>
            Ale
          </Greetings>
        ))}
      </ul>
    </div>
  );
};

export default Iteration2;
