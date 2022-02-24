import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import './App.css';
import dataArray from './data/berlin.json';

function App() {
  return (
    <div className="App">
      <h1>List of People?!</h1>
      
      <Greetings lang="es" firstName = { dataArray[0].firstName } />
      
      {
        dataArray.map(person => {
          return (
            <IdCard  
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
