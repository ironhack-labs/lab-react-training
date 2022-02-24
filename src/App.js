import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import './App.css';
import dataArray from './data/berlin.json';

function App() {
  return (
    <div className="App">
      <h1>List of People?!</h1>
      
      <Greetings lang="es" firstName = { dataArray[0].firstName } />
      <Random min={8} max={12} />

      {
        dataArray.map((person, index) => {
          return (
            <IdCard  
                key={ index }
                lastName={ person.lastName }
                firstName={ person.firstName }
                gender={ person.gender }
                height={ 170 }
                birth={ '01.01.2007' }
                picture={ person.img }
              />
          )
        })
      }


    </div>
  );
}

export default App;
