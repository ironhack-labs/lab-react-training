import React from 'react';
import { Greetings } from './Greetings/Greetings';

const Iteration2 = () => {
  return (
    <div className="row gx-5 w-50">
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
};

export { Iteration2 };
