import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import './App.css';
import dataArray from './data/berlin.json';

function App() {
  return (
    <div className="App">
      <h1>List of People?!</h1>
      
      <Greetings lang="es" firstName = { dataArray[0].firstName } />
      <Random min={8} max={12} />
      <BoxColor r={255} g={255} b={0} />

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
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

      <Rating stars={0}/>
      <Rating stars={1.49}/>
      <Rating stars={1.5}/>
      <Rating stars={3}/>
      <Rating stars={4}/>
      <Rating stars={5}/>

    </div>
  );
}

export default App;
