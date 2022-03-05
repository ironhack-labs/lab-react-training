import './App.css';
import Idcard from'./Idcard.js';  //importado a funcao com o js.
import Greetings from './components/Greeting.js';
import Random from './components/Random';

const dataBase = [
  {
    lastName:'Doe',
    firstName:'John',
    gender:'male',
    height:1.78,
    birth:new Date("1992-07-14"),
    picture:"https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName:'Delores ',
    firstName:'Obrien',
    gender:'female',
    height:1.72,
    birth:new Date("1988-05-11"),
    picture:"https://randomuser.me/api/portraits/women/44.jpg"
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         IdCard
        </h1>
      </header>
      <div>
        {dataBase.map((currentIdcardObj) => {
          return (
            <div>
              <Idcard
                dataObj = {currentIdcardObj}
                // firstName={currentIdcardObj.firstName}
                // lastName={currentIdcardObj.lastName}
                // gender={currentIdcardObj.gender}
                // height={currentIdcardObj.height}
                // birth={currentIdcardObj.birth}
                // picture={currentIdcardObj.picture}
              />
            </div>
          );
        })}
      </div>
      <div>
        <h1 className='Titulos'>
          Greetings
        </h1>
        <div className='card-box'>
          <Greetings lang="de">Ludwig</Greetings>
        </div>
        <div className='card-box'>
          <Greetings lang="en">François</Greetings>
        </div>
      </div>
      <div>
        <h1 className='Titulos'>
          Random
        </h1>
        <div className='card-box'>
          <Random number="seis"></Random>
        </div>
        <div className='card-box'>
          <Random number="cem"></Random>
        </div>
      </div>
      <div>
        <h1 className='Titulos'>
          BoxColor
        </h1>
        <div>

        </div>
        <div>
          
        </div>
      </div>

    </div>
  );
}

export default App;
