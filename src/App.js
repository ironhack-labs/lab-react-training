import './App.css';
import BoxColors from './components/BoxColors/BoxColors';
import Greetings from './components/Greetings/Greetings';
import IdCard from './components/Idcard/IdCard';
import Random from './components/Random/Random';

const idArray = [
  {
    user: {
      firstname: 'John',
      lastname: 'Doe',
      gender: 'male',
      height: '178',
      birth: '1992-07-14',
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
  },
  {
    user: {
      firstname: 'Delores',
      lastname: 'Obrien',
      gender: 'female',
      height: '172',
      birth: '1988-05-11',
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
];

function App() {
  return (
    <div className="App">
      <IdCard idCard={idArray[0]} />
      <IdCard idCard={idArray[1]} />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColors r={255} g={0} b={0} />
      <BoxColors r={128} g={255} b={0} />
    </div>
  );
}

export default App;
