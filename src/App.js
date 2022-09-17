// import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

const delores = {
  lastName: 'Delores ',
  firstName: 'Obrien',
  gender: 'female',
  height: 172,
  birth: new Date('1988-05-11'),
  picture: 'https://randomuser.me/api/portraits/women/44.jpg',
};

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <IdCard {...delores} />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Dani</Greetings>
      <Greetings lang="en">Maxime</Greetings>
    </div>
  );
}

export default App;
