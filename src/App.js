import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/random';

function App() {
  const data = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },

    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date('1988-05-11'), //ni puta idea de como formatear esto. si uso '.format('MM-DD-YYYY')' peta
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  return (
    <>
      <div>
        <div className="App">
          {data.map((props, index) => {
            return <IdCard key={index} data={props} />;
          })}
        </div>

        <div>
          <h3>Greetings</h3>
          <Greetings lang="fr">François</Greetings>
          <Greetings lang="de">Ludwig</Greetings>
        </div>
      </div>
      <div>
        <h3>Random integer</h3>
        <Random min={1} max={6}></Random>
      </div>
    </>
  );
}

export default App;
