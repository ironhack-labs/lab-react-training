import React from 'react';
import './App.css';
import IdCard from './components/misc/IdCard';
import Greetings from './components/misc/Greetings';
import Random from './components/misc/Random';
import BoxColor from './components/misc/BoxColor';
import CreditCard from './components/misc/CreditCard';

function App() {
  return (
    <div className="App">
      <div className='app-container'>
      <IdCard 
        lastName="Doe" 
        firstName="John" 
        gender='Male'
        height={178}
        birth={(new Date("1992-07-14")).toString().slice(0, 15)}
        picture="https://randomuser.me/api/portraits/men/44.jpg" 
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='Female'
        height={172}
        birth={(new Date("1988-05-11")).toString().slice(0, 15)}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      </div>
      <div className='app-greetings'>
        <Greetings lang='fr'>Marine</Greetings>
        <Greetings lang='de'>Chloe</Greetings>
        <Greetings lang='en'>Joshua</Greetings>
        <Greetings lang='es'>Maria</Greetings>
      </div>
      <div className='app-random'>
        <Random minN={1} maxN={6}/>
        <Random minN={1} maxN={100}/>
      </div>
      <div className='app-boxcolor'>
        <BoxColor r={139} g={110} b={219}/>
        <BoxColor r={170} g={200} b={101}/>
      </div>
      <div className='app-creditcard'>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expM={3}
          expY={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        /> 
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expM={3}
          expY={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expM={12}
          expY={2019}
          bank="ING"
          owner="Joao Silva"
          bgColor="#d4af37"
          color="white" 
        /> 
      </div>
    </div>
  );
}

export default App;
