import React from 'react';
import Greeting from './Greeting';

export default function GreetingsSection() {
  return (
    <div>
      <h1>Greetings</h1>

      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>
    </div>
  );
}
