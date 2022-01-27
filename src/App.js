
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import DriverCard from './components/DriverCard';
import Rating from './components/Rating';



function App() {
  return (
  
    <div className="App">
      <div className='div-cards'>
        <h1>IdCard</h1>
          <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

          <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        
      </div>
      <div className='div-greetings'>
        <h1>Greetings</h1>
        <Greetings lang='de'>Ludwig</Greetings>
        <Greetings lang='fr'>François</Greetings>
      </div>
      <div className='div-random'>
        <h1>Random Number</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <div className='div-box-color'>
        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0}/>
        <BoxColor r={128} g={255} b={0}/>
      </div>
      <div className='credit-card-div'></div>
      <CreditCard
      type="Visa"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white" 
      />
    
      <CreditCard
      type="Master Card"
      number="0123456789010995"
      expirationMonth={3}
      expirationYear={2021}
      bank="N26"
      owner="Maxence Bouret"
      bgColor="#eeeeee"
      color="#222222"
      />
    
      <CreditCard
      type="Visa"
      number="0123456789016984"
      expirationMonth={12}
      expirationYear={2019}
      bank="Name of the Bank"
      owner="Firstname Lastname"
      bgColor="#ddbb55"
      color="white" 
      />  
    </div>
    //<div>
    //<Rating>0</Rating>
    //<Rating>1.49</Rating>
    //<Rating>1.5</Rating>
    //<Rating>3</Rating>
    //<Rating>4</Rating>
    //<Rating>5</Rating>
    //</div>             ESTÁ DANDO ERRO, NÃO CONSEGUI TERMINAR.
  );
}

export default App;
