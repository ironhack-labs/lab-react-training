
import './App.css'
import Greetings from './greetings/Greetings';
import './idCard/IdCard'
import IdCard from './idCard/IdCard';
//import Random from './random/Random';
import BoxColor from './boxColor/BoxColor';

function App() {
  return (
    <>
      <IdCard
        lastName='Doe'
        firstName='jhon'
        gender='male'
        height={178}
        birth={new Date('1993-08-21')}
      />

      <IdCard
        lastName='Delores'
        firstName='Obrian'
        gender='female'
        height={178}
        birth={new Date('1995-06-19')}
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/* <Random min={1} max={6} />
      <Random min={1} max={100} /> */}

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />









    </>

  )
}

export default App;
