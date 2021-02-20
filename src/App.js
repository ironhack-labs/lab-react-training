import React from 'react';
import Idcard from './components/Idcard';
import Greetings from './components/Greetings';
import Random from './components/Random';


function App() {
  return (
  <div>
    <Idcard picture='https://static.wikia.nocookie.net/disney/images/c/ca/Profile_-_Sebastian.jpeg/revision/latest/smart/width/200/height/200?cb=20190312033135'
            firstName='Sebastian'
            lastName='Montoya'
            gender='male'
            height='5`10'
            birth= 'March 25th 1996' />
    <Idcard picture='https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'
            firstName='SpongeBob'
            lastName='Squarepants'
            gender='male'
            height='4in'
            birth= 'May 1st 1999' />
    <hr />
    <Greetings lang='es'>Sebastian</Greetings>
    <Greetings lang='fr'>Spongebob</Greetings>
    <hr />
    <Random min={20} max={25} />
    <Random min={50} max={200} />
  </div>
  );
}

export default App;
