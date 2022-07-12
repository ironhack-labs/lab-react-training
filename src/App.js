import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Random from './components/Random';
import Greetings from './components/Greetings';

function App() {
  return (
    <>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height={172}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="es">Iva</Greetings>
      <Greetings lang="fr">Iva</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </>
  );
}

export default App;
