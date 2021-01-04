import React from 'react';
import IdCart from './components/IdCart';
import './App.css';
import Greatings from './components/Greatings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

function App() {
  return (
    <div className="App">
      {/* *************IDCARD************* */}
      <IdCart
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        lastName="Doe"
        firstName="John"
        genre="Male"
        height={178}
        birth={new Date('1988-07-12')}
      />
      <IdCart
        lastName="Obrien"
        firstName="Delores"
        genre="Female"
        height={181}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* ***************GREATINGS************  */}
      <Greatings lang="fr" children="François" />
      <Greatings lang="en" children="Josua" />

      {/* ****************RANDOM VALUES********** */}
      <Random min={15} max={25} />
      <Random min={3} max={6} />

      {/* **********BOXCOLOR************** */}
      <BoxColor
        r={155} //Numbers between 0 and 225
        g={100} //Numbers between 0 and 225
        b={75} //Numbers between 0 and 225
      />
      <BoxColor
        r={128} //Numbers between 0 and 225
        g={155} //Numbers between 0 and 225
        b={45} //Numbers between 0 and 225
      />

      {/* **********CREDITCARD*********** */}
      <div className="creditCardConatiner">
        <CreditCard
          type="Master caRD" //Can be "Visa" or "Master Card"
          number="1234567825804587"
          expirationMonth={6} //Number between 1 and 12
          expirationYear={2025} //Number represents 2 last digit of the year
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#e59595"
          color="#222222"
        />
        <CreditCard
          type="Visa" //Can be "Visa" or "Master Card"
          number="1234567885207898"
          expirationMonth={11} //Number between 1 and 12
          expirationYear={2024} //Number represents 2 last digit of the year
          bank="BNP"
          owner="Jean Dujardin"
          bgColor="#33f4d1"
          color="#892323"
        />
        <CreditCard
          type="Master CARD" //Can be "Visa" or "Master Card"
          number="1234567802583658"
          expirationMonth={1} //Number between 1 and 12
          expirationYear={2022} //Number represents 2 last digit of the year
          bank="BNP"
          owner="Maurine Janvier"
          bgColor="#666060"
          color="#ddf254"
        />
      </div>
    </div>
  );
}

export default App;
