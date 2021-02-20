import React from 'react';
import Idcard from './components/Idcard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

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
    <hr />
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={66} g={4} b={32} />
    <hr />
    <CreditCard type='Visa'
                number='1234123412341234'
                expirationMonth={3}
                expirationYear={25}
                bank='Suntrust'
                owner='Sebastian Montoya'
                bgColor='#11aa99'
                />
    <CreditCard type='Mastercard'
          number='1234123412349876'
          expirationMonth={7}
          expirationYear={27}
          bank='PNC'
          owner='SpongeBob Squarepants'
          bgColor='black'
          />           
  </div>
  );
}

export default App;
