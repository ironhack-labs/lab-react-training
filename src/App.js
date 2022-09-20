import './App.css';

import IdCard from "./components/IdCard/IdCard";
import Greetings from "./components/Greetings/Greeting"
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor'

function App() {

  const idCard = [
    {
      lastName : "Doe",
      firstName: "John",
      gender: "male",
      height: "178",
      birth: new Date('1992-07-14').toDateString(),
      picture:"https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName : "Delores",
      firstName: "Obrien",
      gender: "female",
      height: "172",
      birth: new Date('1988-05-11').toDateString(),
      picture:"https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]
  return (
    <div className="App">
      <div>
        <h1>Id Cards</h1>
        {idCard.map(({picture, firstName, lastName , gender , height, birth })=> {
          return <IdCard picture={picture} lastName={lastName} firstName={firstName}
                  gender={gender} height={height} birth={birth} key={picture} />
        })}
      </div>
      <div>
        <h1>Greeting</h1>
         <Greetings lang="de">Ludwig</Greetings>
         <Greetings lang="es">Pelayo</Greetings>
         <Greetings lang="fr">François</Greetings>
         <Greetings lang="en">Lizzy</Greetings>
      </div>
      <div>
        <h1>Random</h1>
         <Random min={1} max={6}/>
         <Random min={1} max={100}/>
      </div>
      <div>
        <h1>BoxColor</h1>
         <BoxColor r={255} g={0} b={0} />
         <BoxColor r={128} g={255} b={0} />
      </div>
    </div>
  );
}

export default App;


