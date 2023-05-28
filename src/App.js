import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

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

  // const lang = ["de", "en", "es", "fr"];
  // const children = [{en: "Hello"},{de: "Hallo"},{es: "Hola"},{fr: "Bonjour"}];

  return (
    <div className='App'>
      {cardArray.map (card => {
        return <IdCard eachCard={card}/>
      }
      )}
      <div>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      </div>
      </div>
  );
}

export default App;
