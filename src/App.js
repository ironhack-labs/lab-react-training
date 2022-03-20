import './App.css';
import IdCard from './components/IdCard/IdCard'
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';

function App() {
  return (
    <>
    <div className='cards'>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
    <div className='greetings'>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Ludwig</Greetings>
      <Greetings lang="en">François</Greetings>
    </div>
    <div className='cards'>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>
    </>
  );
}

export default App;
