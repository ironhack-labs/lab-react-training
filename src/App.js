import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <IdCard firstName='Leonardo'
              lastName='Bravo'
              gender='male'
              height={185}
              birth={new Date('1992-10-15').toString()}
              picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard firstName='Sofía'
              lastName='Bravo'
              gender='female'
              height={165}
              birth={new Date('1991-05-19').toString()}
              picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de" children="Leo" />
      <Greetings lang="en" children="Román" />
      <Greetings lang="es" children="Emmanuel" />
      <Greetings lang="fr" children="Joaquín" />

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>
  );
}

export default App;
