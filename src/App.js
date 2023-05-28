import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import Boxcolor from './components/Boxcolor';

function App() {
  const cardArray = [ {  
    // id: 1,
    lastName: "Delores",
    firstName:'Obrien',
    gender: 'female',
    height: 172,
    birth: Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"}

, { 
  // id: 2,
    lastName: "Doe",
    firstName:'John',
    gender: 'male',
    height: 178,
    birth: Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
} ];

  
  return (
    <div className='App'>
      <div>
        {cardArray.map (card => {
          return <IdCard eachCard={card}/>
        }
        )}
      </div>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <div>
        <Boxcolor r={255} g={0} b={0} />
        <Boxcolor r={128} g={255} b={0} />
      </div>

      </div>
  );
}

export default App;
