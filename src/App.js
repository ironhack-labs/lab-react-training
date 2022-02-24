import IdCard from './components/IdCard';
import './App.css';
import dataArray from './data/berlin.json';

function App() {
  return (
    <div className="App">
      <h1>List of People?!</h1>
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
