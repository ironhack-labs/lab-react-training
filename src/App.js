import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/random';

function App() {
  const data = [
    {
      lastName: 'Sponge',
      firstName: 'Bob',
      gender: 'male',
      height: 128,
      birth: new Date('1986-07-14'),
      picture: 'https://thypix.com/wp-content/uploads/2021/11/sponge-bob-profile-picture-thypix-28.jpg',
    },

    {
      lastName: 'Ciccone',
      firstName: 'Madonna Louise',
      gender: 'female',
      height: 161,
      birth: new Date('1958-08-16'), //ni puta idea de como formatear esto. si uso '.format('MM-DD-YYYY')' peta
      picture: 'http://1.bp.blogspot.com/_tHQ1gA2brsc/TCO-RLIQXfI/AAAAAAAAFSE/_x3LpZZ261s/s400/madonna-80%27s.jpg',
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

        <div className="GreetingsCard">
          <h3>Greetings</h3>
          <Greetings lang="fr">François</Greetings>
          <Greetings lang="de">Ludwig</Greetings>
        </div>
      </div>
      <div className="RandomCard">
        <h3>Random integer</h3>
        <Random min={1} max={6}></Random>
        <Random min={1} max={100}></Random>
      </div>
    </>
  );
}

export default App;
