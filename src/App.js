import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div>

      <div className="App">
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
      </div>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="en">Charles</Greetings>
        <Greetings lang="es">Pedro</Greetings>
        <Greetings >User</Greetings>
      </div>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;
